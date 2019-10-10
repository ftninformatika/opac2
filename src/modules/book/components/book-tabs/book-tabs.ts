import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Book } from '../../../../models/book.model';
import { ERecordFormatType } from '../../../core/pipes/record-format.pipe';

@Component({
  selector: 'book-tabs',
  templateUrl: 'book-tabs.html',
  styleUrls: ['book-tabs.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookTabs {
  @Input() book: Book;
  private RecordFormatType = ERecordFormatType;
}
