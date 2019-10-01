import { AddToShelfAction, RemoveFromShelfAction, UserState } from '../../../core/states/user/user.state';
import { ERecordItemStatus, RecordItem } from '../../../../models/book.model';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'items-availability-card',
  templateUrl: 'items-availability-card.component.html',
  styleUrls: ['items-availability-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemsAvailabilityCardComponent implements OnInit {
  @Input() bookId: string;
  @Input() recordItems: RecordItem[];
  @Input() containShowableItems: boolean;
  private readonly _store: Store;
  public booksOnShelf: string[];
  public totalItems: number;
  public availableItems: number;
  // This will be used when reservations are used
  public reservedItems: number;
  public locations: string[];

  public constructor(store: Store) {
    this._store = store;
    this.booksOnShelf = this._store.selectSnapshot(UserState.bookshelfBooksIds);
  }

  public ngOnInit(): void {
    if (!this.recordItems) {
      return;
    }
    this.totalItems = this.recordItems.filter(i => i.status !== ERecordItemStatus.NotShowable).length;
    this.availableItems = this.recordItems.filter(i => i.status === ERecordItemStatus.Free).length;
    this.locations = [...new Set(this.recordItems.map(i => i.location))];
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
