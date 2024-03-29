import { Component, EventEmitter, Input, OnDestroy, Output, ViewEncapsulation } from '@angular/core';
import { BookCollectionModel } from '../../../../models/book-collection.model';
import { UsersService } from '../../../core/services/users.service';
import { Book } from '../../../../models/book.model';
import { ToastService } from 'ng-uikit-pro-standard';

@Component({
  selector: 'admin-collection-editor',
  templateUrl: 'admin-collection-editor.html',
  styleUrls: ['admin-collection-editor.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminCollectionEditor implements OnDestroy {
  @Input() collection: BookCollectionModel;
  @Input() books: Book[];
  @Output() deleteCollectionEvent = new EventEmitter<string>();
  @Output() touchedEvent = new EventEmitter<boolean>();
  public touched: boolean;
  private readonly _userService: UsersService;
  private readonly _toastService: ToastService;

  public constructor(userService: UsersService, toastService: ToastService) {
    this._userService = userService;
    this._toastService = toastService;
  }

  public ngOnDestroy(): void {
    if (this.touched) {
      return;
    }
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
    this.shiftArr(fromIndex, toIndex, this.books);
    this.shiftArr(fromIndex, toIndex, this.collection.recordsIds);
    this.touchedEvent.emit(true);
    this.touched = true;
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
    this._userService.adminCreateModifyCollection(this.collection).subscribe(
resp => {
      if (!resp) {
          this._toastService.warning($localize`:@@nijeUspeloCuvanjePromenaUKolekciji:Није успело чување промеа у колекцији!`);
        } else {
          this._toastService.success($localize`:@@uspesnoStePromeniliKolokciju:Успешно сте променили колецију!`);
        }
      },
() => this._toastService.warning($localize`:@@nijeUspeloCuvanjePromenaUKolekciji:Није успело чување промеа у колекцији!`)
    );
  }

  private shiftArr(oldIndex: number, newIndex: number, arr: any[]) {
      if ( arr.length === 0 ) {
        return this;
      }
      while (oldIndex < 0) {
        oldIndex += arr.length;
      }
      while (newIndex < 0) {
        newIndex += arr.length;
      }
      if (newIndex >= arr.length) {
        let k = newIndex - arr.length;
        while ((k--) + 1) {
          arr.push(undefined);
        }
      }
      arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
      return this; // for testing purposes
  }

}
