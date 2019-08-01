import { Component } from '@angular/core';
import { BooksService } from '../../../core/services/books.service';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { SignOutAction, UserState } from '../../../core/states/user/user.state';
import { TranslateService } from '@ngx-translate/core';
import { ELocalizationLanguage } from '../../../../config/localization-laguage.enum';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { IPrefixValue } from '../../../../models/prefix-value.model';
import { ConfigState } from '../../../core/states/config/config.state';
import { SearchUtil } from '../../../../utils/animations/search-util';

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

  public constructor(booksService: BooksService, router: Router, store: Store, translateService: TranslateService) {
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
    if (!this.searchText || this.searchText === '') {
      return;
    }
    if (this.selectedAc && this.searchText === this.selectedAc.value) {
      const searchModel = SearchUtil.generateSearchModelFromAutoComplete(this.selectedAc);
      console.log(searchModel);
      this._router.navigate(['/search/result'], {queryParams: {query: JSON.stringify(searchModel)}});
    } else {
      const searchModel = SearchUtil.generateSearchModelFromAutoComplete(this.searchText);
      this._router.navigate(['/search/result'], {queryParams: {query: JSON.stringify(searchModel)}});
    }
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
