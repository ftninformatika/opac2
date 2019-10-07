import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { BookCollectionModel } from '../../../../models/book-collection.model';
import { Book } from '../../../../models/book.model';
import 'array.prototype.move';
import {UsersService} from '../../../core/services/users.service';

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
  @Output() touchedEvent = new EventEmitter<boolean>();
  private readonly _userService: UsersService;

  public constructor(userService: UsersService) {
    this._userService = userService;
  }

  public deleteBook(collectionId: string) {
    if (!collectionId) {
      return;
    }
    this.deleteCollectionEvent.emit(collectionId);
  }

  public shiftBook(fromIndex: number, toIndex: number) {
    if (!this.collection || !this.collection.recordsIds || !this.books
    || toIndex <= -1 || toIndex >= this.books.length) {
      return;
    }
    this.books.move(fromIndex, toIndex);
    this.collection.recordsIds.move(fromIndex, toIndex);
    this.touchedEvent.emit(true);
  }

  public removeBook(index: number) {
    if (!this.books || !this.collection || !this.collection.recordsIds
    || index < 0 || index >= this.books.length) {
      return;
    }
    this.books.splice(index, 1);
    this.collection.recordsIds.splice(index, 1);
    this.touchedEvent.emit(true);
  }

  public saveChanges() {
    if (!this.collection) {
      return;
    }
    // TODO: Toast messages
    this._userService.adminCreateModifyCollection(this.collection).subscribe();
  }

}
