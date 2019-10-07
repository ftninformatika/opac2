import {BookCollectionModel} from '../../../../models/book-collection.model';
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import {Book} from '../../../../models/book.model';

@Component({
  selector: 'admin-collection-editor',
  templateUrl: 'admin-collection-editor.html',
  styleUrls: ['admin-collection-editor.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminCollectionEditor {
  @Input() collection: BookCollectionModel;
  @Input() books: Book[];
  @Output() deleteCollectionEvent = new EventEmitter<string>();

  public deleteBook(collectionId: string) {
    if (!collectionId) {
      return;
    }
    this.deleteCollectionEvent.emit(collectionId);
  }
}
