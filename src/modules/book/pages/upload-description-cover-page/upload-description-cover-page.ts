import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Book } from '../../../../models/book.model';

@Component({
  selector: 'upload-description-cover-page',
  templateUrl: 'upload-description-cover-page.html',
  styleUrls: ['upload-description-cover-page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UploadDescriptionCoverPage {
  @Input() book: Book;
}
