import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../../../models/book.model';
import { Store } from '@ngxs/store';
import { ConfigState } from '../../../core/states/config/config.state';
import { AddToShelfAction, RemoveFromShelfAction, UserState } from '../../../core/states/user/user.state';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookCardComponent implements OnInit {

  @Input() book: Book;
  @Input() withButtonsAndInfo: boolean;
  private readonly _router: Router;
  private readonly _store: Store;
  public lib: string;
  public isAdmin: boolean;
  public isOnShelf: boolean;

  public constructor(router: Router, store: Store) {
    this._router = router;
    this._store = store;
    this.lib = this._store.selectSnapshot(ConfigState.library);
    this.isAdmin = this._store.selectSnapshot(UserState.admin);
  }

  public ngOnInit() {
    const booksOnShelf = this._store.selectSnapshot(UserState.bookshelfBooksIds);
    if (this.book && this.book._id && booksOnShelf.indexOf(this.book._id) > -1) {
      this.isOnShelf = true;
    }
  }

  public async removeFromShelf(bookId: string) {
    await this._store.dispatch(new RemoveFromShelfAction(bookId)).toPromise();
    this.isOnShelf = false;
  }

  public async onShelf(bookId: string) {
    await this._store.dispatch(new AddToShelfAction(bookId)).toPromise();
    this.isOnShelf = true;
  }

  public async gotoBook(id: string) {
    await this._router.navigate(['/book', this.lib, id]);
  }
}
