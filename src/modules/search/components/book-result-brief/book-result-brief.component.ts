import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { BookCoverUtils } from '../../../../utils/book-cover.utils';
import { Book } from '../../../../models/book.model';
import { Store } from '@ngxs/store';
import { AddToShelfAction, RemoveFromShelfAction, UserState } from '../../../core/states/user/user.state';
import {ConfigState} from '../../../core/states/config/config.state';

@Component({
  selector: 'book-result-brief',
  templateUrl: './book-result-brief.component.html',
  styleUrls: ['./book-result-brief.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookResultBrief implements OnInit {
  @Input() book: Book;
  private readonly _store: Store;
  public authors: string;
  public publishInfo: string;
  public errImg;
  public booksOnShelf: string[];
  public lib: string;
  public isAdmin: boolean;

  public constructor(store: Store) {
    this._store = store;
    this.authors = '';
    this.publishInfo = '';
    this.errImg = BookCoverUtils.getBlankBookCover();
    this.lib = this._store.selectSnapshot(ConfigState.library);
    this.isAdmin = this._store.selectSnapshot(UserState.admin);
  }

  public ngOnInit(): void {
    this.booksOnShelf = this._store.selectSnapshot(UserState.bookshelfBooksIds);
    this.packAuthors();
    this.packPublisherInfo();
  }

  private packAuthors() {
    if (!this.book || !this.book.authors || this.book.authors.length === 0) {
      return;
    }
    this.authors = this.book.authors.join(', ');
  }

  public async removeFromShelf(bookId: string) {
    await this._store.dispatch(new RemoveFromShelfAction(bookId)).toPromise();
    this.booksOnShelf = this._store.selectSnapshot(UserState.bookshelfBooksIds);
  }

  public async onShelf(bookId: string) {
    await this._store.dispatch(new AddToShelfAction(bookId)).toPromise();
    this.booksOnShelf = this._store.selectSnapshot(UserState.bookshelfBooksIds);
  }

  private packPublisherInfo() {
    if (!this.book) {
      return;
    }
    let putDot = false;
    const inf: string[] = [];
    if (this.book.publisher && this.book.publisher !== '') {
      inf.push(this.book.publisher);
    }
    if (this.book.publishPlace && this.book.publishPlace !== '') {
      inf.push(this.book.publishPlace);
    }
    if (this.book.publishYear && this.book.publishYear !== '') {
      inf.push(this.book.publishYear);
      putDot = true;
    }
    if (inf.length === 0) {
      return;
    }
    this.publishInfo = inf.join(', ') + (putDot ? '.' : '');
  }

}
