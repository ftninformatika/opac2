import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Book } from '../../../../models/book';

@Component({
  selector: 'book-result-brief',
  templateUrl: './book-result-brief.component.html',
  styleUrls: ['./book-result-brief.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookResultBrief {
  @Input() book: Book;

}
