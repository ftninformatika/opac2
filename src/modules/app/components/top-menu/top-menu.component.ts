import { Component } from '@angular/core';
import { BooksService } from '../../../core/services/books.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Book } from '../../../core/models/book';
import { Select, Store } from '@ngxs/store';
import { SignOutAction, UserState } from '../../../core/states/user/user.state';
import { TranslateService } from '@ngx-translate/core';
import { ELocalizationLanguage } from '../../../../config/localization-laguage.enum';
import { ChangeLanguageAction } from '../../../core/states/localization/localization.state';

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
  public searchText: string;
  public results: Observable<Book[]>;
  @Select(UserState) user;

  public constructor(booksService: BooksService, router: Router, store: Store, translateService: TranslateService) {
    this._bookService = booksService;
    this._router = router;
    this._store = store;
    this._translateService = translateService;
  }

  public searchEntries(term: string): Observable<Book[]> {
    return this._bookService.simpleSearch(term);
  }

  public getFilteredData() {
    this.results = this.searchEntries(this.searchText);
  }

  public emptySearchResults() {
    this.results = of([] as Book[]);
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
    this._store.dispatch(new ChangeLanguageAction(ELocalizationLanguage.US_ENGLISH));
    this._translateService.use(ELocalizationLanguage.US_ENGLISH);
    console.log(this._translateService.getLangs());
  }
}
