import {
  AddToShelfAction,
  RemoveFromShelfAction,
  ReserveBookAction,
  UserState
} from '../../../core/states/user/user.state';
import { ERecordItemStatus, RecordItem } from '../../../../models/book.model';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngxs/store';
import {BooksService} from "../../../core/services/books.service";
import {response} from "express";
import {Router} from "@angular/router";

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
  private readonly _bookService: BooksService;
  private readonly _router: Router;

  public isAdmin: boolean;
  public booksOnShelf: string[];
  public totalItems: number;
  public availableItems: number;
  // This will be used when reservations are used
  public reservedItems: number;
  public locations: string[];

  public selectedLocation: string;

  public constructor(store: Store, bookService: BooksService, router: Router) {
    this._store = store;
    this.booksOnShelf = this._store.selectSnapshot(UserState.bookshelfBooksIds);
    this._bookService = bookService;
    this._router = router;
  }

  public ngOnInit(): void {
    if (!this.recordItems) {
      return;
    }

    this.isAdmin = this._store.selectSnapshot(UserState.admin);
    this.totalItems = this.recordItems.filter(i => i.status !== ERecordItemStatus.NotShowable).length;
    this.availableItems = this.recordItems.filter(i => i.status === ERecordItemStatus.Free).length;
    this.locations = [...new Set(this.recordItems.map(i => i.location))];
    this.selectedLocation = this.locations[0];    // set default value
  }

  public async addToShelf() {
    await this._store.dispatch(new AddToShelfAction(this.bookId)).toPromise();
    this.booksOnShelf = this._store.selectSnapshot(UserState.bookshelfBooksIds);
  }

  public async removeFromShelf() {
    await this._store.dispatch(new RemoveFromShelfAction(this.bookId)).toPromise();
    this.booksOnShelf = this._store.selectSnapshot(UserState.bookshelfBooksIds);
  }

  public async reserve(){
    let location = this.selectedLocation;
    let selectedRecordItem = this.recordItems.filter(function (recordItem) {
      return recordItem.location === location;
    })

    await this._store.dispatch(new ReserveBookAction(this.bookId, selectedRecordItem[0].locCode)).toPromise();
    //this.booksOnShelf = this._store.selectSnapshot(UserState.bookshelfBooksIds);
  }
}
