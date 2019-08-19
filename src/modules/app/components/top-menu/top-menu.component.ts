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
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'top-menu',
  templateUrl: 'top-menu.component.html',
  styleUrls: ['top-menu.component.scss']
})
export class TopMenuComponent {
  private readonly _bookService: BooksService;
  private readonly _router: Router;
  private readonly _store: Store;
  private readonly _translateService: TranslateService;
  private searchTextChanged: Subject<string> = new Subject<string>();
  public searchText: string;
  public results: Observable<IPrefixValue[]>;
  public hidden = false;
  public selectedAc: IPrefixValue;
  @Select(UserState) user;
  @Select(ConfigState) configState;

  public constructor(booksService: BooksService, router: Router, store: Store,
                     translateService: TranslateService) {
    this._bookService = booksService;
    this._router = router;
    this._store = store;
    this._translateService = translateService;
    this.selectedAc = null;
    this.searchTextChanged.pipe(
      debounceTime(850),
      distinctUntilChanged()
    ).subscribe(query => {
      this._bookService.autocomplete(query).subscribe(
        (resp: IPrefixValue[]) => this.results = of(resp)
      );
    });
  }

  public search() {
    if (!this.searchText || this.searchText === '' || this.searchText.length < 3) {
      return;
    }
    const searchModel = (this.selectedAc && this.searchText === this.selectedAc.value)
      ? SearchUtil.generateSearchModelFromAutoComplete(this.selectedAc) :
        SearchUtil.generateSearchModelFromAutoComplete(this.searchText);
    const pageOptions = {...IResultPageOptionsInitial};
    const library = this._store.selectSnapshot(ConfigState.library);
    pageOptions.lib = library;
    const uriChunk = `query=${JSON.stringify(searchModel)}&pageOptions=${JSON.stringify(pageOptions)}`;
    const encodedURI = CryptoUtils.encryptData(uriChunk);
    this._router.navigate(['/search/result'], {queryParams: {s: encodedURI}});
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

  public onAutoCompleteSelect(event) {
    this.results.subscribe(
      (res: IPrefixValue[]) => {
        // Autocomplete result list always returns distinct values, so we can do this
        this.selectedAc = res.find(e => e.value === event.text);
        if (this.selectedAc) {
          this.searchText = this.selectedAc.value;
        }
      }
    );
  }

  public signOut() {
    this._store.dispatch(new SignOutAction());
    this._router.navigate(['']);
  }

  public changeLanguage() {
    this._translateService.use(ELocalizationLanguage.US_ENGLISH);
  }
}
