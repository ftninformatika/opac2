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
import { Book } from '../../../../models/book.model';

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
  // public results: Observable<Book[]>;
  public results: Observable<IPrefixValue[]>;
  @Select(UserState) user;

  public constructor(booksService: BooksService, router: Router, store: Store, translateService: TranslateService) {
    this._bookService = booksService;
    this._router = router;
    this._store = store;
    this._translateService = translateService;
    this.searchTextChanged.pipe(
      debounceTime(850),
      distinctUntilChanged()
    ).subscribe(query => {
      this._bookService.searchAutoComplete(query).subscribe(
        (resp: IPrefixValue[]) => this.results = of(resp)
      );
    });
  }

  public searchEntries(term: string): Observable<Book[]> {
    return this._bookService.simpleSearch(term);
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
    const bookId: number = + event.text;
    this.searchText = '';
    this._router.navigate(['/book', bookId]);
  }

  public signOut() {
    this._store.dispatch(new SignOutAction());
    this._router.navigate(['']);
  }

  public changeLanguage() {
    this._translateService.use(ELocalizationLanguage.US_ENGLISH);
  }
}
