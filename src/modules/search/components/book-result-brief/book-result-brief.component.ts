import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Book } from '../../../../models/book.model';

@Component({
  selector: 'book-result-brief',
  templateUrl: './book-result-brief.component.html',
  styleUrls: ['./book-result-brief.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookResultBrief implements OnInit {
  @Input() book: Book;
  public authors: string;
  public publishInfo: string;

  public constructor() {
    this.authors = '';
    this.publishInfo = '';
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
