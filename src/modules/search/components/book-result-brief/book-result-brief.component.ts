import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { BookCoverUtils } from '../../../../utils/book-cover.utils';
import { Book } from '../../../../models/book.model';
import { Store } from '@ngxs/store';
import { AddToShelfAction } from '../../../core/states/user/user.state';

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

  public constructor(store: Store) {
    this._store = store;
    this.authors = '';
    this.publishInfo = '';
    this.errImg = BookCoverUtils.getBlankBookCover();
  }

  public ngOnInit(): void {
    this.packAuthors();
    this.packPublisherInfo();
  }

  private packAuthors() {
    if (!this.book || !this.book.authors || this.book.authors.length === 0) {
      return;
    }
    this.authors = this.book.authors.join(', ');
  }

  public onShelf(bookId: string) {
    this._store.dispatch(new AddToShelfAction(bookId));
  }

  private packPublisherInfo() {
    if (!this.book) {
      return;
    }
    const inf: string[] = [];
    if (this.book.publisher && this.book.publisher !== '') {
      inf.push(this.book.publisher);
    }
    if (this.book.publishPlace && this.book.publishPlace !== '') {
      inf.push(this.book.publishPlace);
    }
    if (this.book.publishYear && this.book.publishYear !== '') {
      inf.push(this.book.publishYear);
    }
    if (inf.length === 0) {
      return;
    }
    this.publishInfo = inf.join(', ');
  }

}
