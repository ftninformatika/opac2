import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddToShelfAction, RemoveFromShelfAction, UserState } from '../../../core/states/user/user.state';

@Component({
  selector: 'items-availability-card',
  templateUrl: 'items-availability-card.component.html',
  styleUrls: ['items-availability-card.component.scss'],
  encapsulation: ViewEncapsulation.None
//  Consider OnPush CDS
})
export class ItemsAvailabilityCardComponent {
  @Input() bookId: string;
  private readonly _store: Store;
  public booksOnShelf: string[];

  public constructor(store: Store) {
    this._store = store;
    this.booksOnShelf = this._store.selectSnapshot(UserState.bookshelfBooksIds);
  }

  public async addToShelf() {
    await this._store.dispatch(new AddToShelfAction(this.bookId)).toPromise();
    this.booksOnShelf = this._store.selectSnapshot(UserState.bookshelfBooksIds);
  }

  public async removeFromShelf() {
    await this._store.dispatch(new RemoveFromShelfAction(this.bookId)).toPromise();
    this.booksOnShelf = this._store.selectSnapshot(UserState.bookshelfBooksIds);
  }
}
