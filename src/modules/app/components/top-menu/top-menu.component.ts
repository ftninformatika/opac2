import { IResultPageOptionsInitial } from '../../../../models/search/result-page-options.model';
import { ELocalizationLanguage } from '../../../../config/localization-laguage.enum';
import { SignOutAction, UserState } from '../../../core/states/user/user.state';
import { ConfigState } from '../../../core/states/config/config.state';
import { SearchUtil } from '../../../../utils/search-util';
import { IPrefixValue } from '../../../../models/prefix-value.model';
import { BooksService } from '../../../core/services/books.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CryptoUtils } from '../../../../utils/crypto.utils';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of, Subject } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import {Component, ElementRef, OnInit, Renderer, ViewChild, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import {ICoder} from '../../../../models/coders/coder.model';

@Component({
  selector: 'top-menu',
  templateUrl: 'top-menu.component.html',
  styleUrls: ['top-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopMenuComponent {
  private readonly _bookService: BooksService;
  private readonly _router: Router;
  private readonly _store: Store;
  private readonly _translateService: TranslateService;
  private searchTextChanged: Subject<string> = new Subject<string>();
  private tmpSelectedText: string;
  public searchText: string;
  public results: Observable<IPrefixValue[]>;
  public hidden = false;
  public selectedAc: IPrefixValue;
  public kioskSubLocation: ICoder;
  private isAdmin: boolean;
  @Select(UserState) user;
  @Select(ConfigState) configState;
  @ViewChild('searchInput', {static: false}) searchInput: ElementRef;

  public constructor(booksService: BooksService, router: Router, store: Store,
                     translateService: TranslateService) {
    this._bookService = booksService;
    this._router = router;
    this._store = store;
    this._translateService = translateService;
    this.isAdmin = this._store.selectSnapshot(UserState.admin);
    this.kioskSubLocation = this._store.selectSnapshot(ConfigState.getKioskSubLocation);
    this.init();
    this.searchTextChanged.pipe(
      debounceTime(850),
      distinctUntilChanged()
    ).subscribe(query => {
      this._bookService.autocomplete(query).subscribe(
        (resp: IPrefixValue[]) => this.results = of(resp)
      );
    });
  }

  public init() {
    this.searchText = '';
    this.tmpSelectedText = '';
    this.selectedAc = null;
    this.results = of ([] as IPrefixValue[]);
  }

  public async search() {
    if (!this.searchText || this.searchText === '' || this.searchText.length < 3) {
      return;
    }
    const searchModel = (this.selectedAc && this.searchText === this.selectedAc.value)
      ? SearchUtil.generateSearchModelFromAutoComplete(this.selectedAc) :
        SearchUtil.generateSearchModelFromAutoComplete(this.searchText);
    const pageOptions = {...IResultPageOptionsInitial};
    pageOptions.lib = this._store.selectSnapshot(ConfigState.library);
    const uriChunk = `query=${JSON.stringify(searchModel)}&pageOptions=${JSON.stringify(pageOptions)}`;
    const encodedURI = CryptoUtils.encryptData(uriChunk);
    await this._router.navigate(['/search/result'], {queryParams: {s: encodedURI}});
    this.init();
  }

  public getFilteredData() {
    this.searchTextChanged.next(this.searchText);
  }

  public emptySearchResults() {
    this.results = of ([] as IPrefixValue[]);
  }

  public onChange() {
    if (this.searchText.length > 3) {
      this.getFilteredData();
    } else {
      this.emptySearchResults();
    }
  }

  public async onAutoCompleteSelect($event) {
    let text;
    if ($event.target && $event.target.textContent && $event.target.textContent !== '') {
      text = $event.target.textContent.split('[')[0].trim();
    } else {
      text = $event.text;
    }
    const res = await this.results.toPromise() as IPrefixValue[];
    this.selectedAc = res.find(e => e.value === text);
    if (this.selectedAc) {
      this.searchText = this.selectedAc.value;
    }
  }

  public mouseOverAutoComplete() {
  }

  public removeFocusInput() {
    this.searchInput.nativeElement.blur();
  }

  public focusRemovedAutocomplete() {
    console.log('removed');
  }

  public signOut() {
    this._store.dispatch(new SignOutAction());
    this._router.navigate(['']);
  }

  public changeLanguage() {
    this._translateService.use(ELocalizationLanguage.US_ENGLISH);
  }
}
