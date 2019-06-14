import { Component, OnInit, HostListener } from '@angular/core';
import { Book } from '../../../core/models/book';
import { BooksService } from '../../../core/services/books.service';
import { Select, Store } from '@ngxs/store';
import { SignInAction, SignOutAction, UserState } from '../../../core/states/user/user.state';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss']
})
export class MainPage implements OnInit {

  private readonly _booksService: BooksService;
  private readonly _store: Store;
  public recommendedBooks: Book[];
  public newBooks: Book[];
  @Select(UserState) user;

  constructor(booksService: BooksService, store: Store) {
    this._booksService = booksService;
    this._store = store;
  }

  public ngOnInit(): void {
    this.newBooks = this._booksService.getNewBooks();
    this.recommendedBooks = this._booksService.getRecommendedBooks();
    console.log(this._store.selectSnapshot(UserState));
  }

  public dummyLogin() {
    this._store.dispatch(new SignInAction('neko', 'passodneko'));
    console.log(this._store.selectSnapshot(UserState));
    this.user.subscribe(
      w => console.log(w)
    );
  }

  public dummyLogout() {
    this._store.dispatch(new SignOutAction());
    console.log(this._store.selectSnapshot(UserState));
    this.user.subscribe(
      w => console.log(w)
    );
  }
}
