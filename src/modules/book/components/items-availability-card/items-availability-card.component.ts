import {
  AddToShelfAction,
  RemoveFromShelfAction,
  UserState
} from '../../../core/states/user/user.state';
import {ERecordItemStatus, RecordItem} from '../../../../models/book.model';
import {Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngxs/store';
import {BooksService} from "../../../core/services/books.service";
import {Router} from "@angular/router";
import {UsersService} from "../../../core/services/users.service";
import {ModalDirective, ToastService} from "ng-uikit-pro-standard";

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
  private readonly _userService: UsersService;
  private readonly _router: Router;
  private readonly _toastService: ToastService;
  @ViewChild('successModal', {static: true}) successModal: ModalDirective;
  @ViewChild('messageModal', {static: true}) messageModal: ModalDirective;
  @ViewChild('confirmModal', {static: true}) confirmModal: ModalDirective;

  public memberNo: string;
  public isAdmin: boolean;
  public booksOnShelf: string[];
  public totalItems: number;
  public availableItems: number;
  // This will be used when reservations are used
  public reservedItems: number;
  public locations: string[];

  public selectedLocation: string;
  public reservationResponseMessage: string;

  public constructor(store: Store, bookService: BooksService, userService: UsersService, router: Router, toast: ToastService) {
    this._store = store;
    this.booksOnShelf = this._store.selectSnapshot(UserState.bookshelfBooksIds);
    this.memberNo = this._store.selectSnapshot(UserState.memberNo);
    this._bookService = bookService;
    this._userService = userService;
    this._router = router;
    this._toastService = toast;
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

  public async checkLoggedUser(){
    // todo dodati da se prikaze modalni za login
    if (this.memberNo == null) {
      await this._router.navigate(['/user/login'], {queryParams: {'redirectURL': this._router.url}});
      // this._toastService.info('Потребно је да се пријавите/региструјете на систем.');
    }else {
      this.confirmModal.show();
    }
  }

  public async reserve() {
    this.confirmModal.hide();

    // get the record for the selected location
    let location = this.selectedLocation;
    let selectedRecordItem = this.recordItems.filter(function (recordItem) {
      return recordItem.location === location;
    });

    let response = null;
    try {
      response = await this._userService.reserveBook({
        recordId: this.bookId,
        coderId: selectedRecordItem[0].locCode
      }).toPromise();
    } catch (e) {
      this._toastService.warning('Грешка при покушају резервисања књиге!');
      return;
    }

    if (response == null) {
      this._toastService.warning('Серверска грешка при покушају резервисања књиге!');
      return;
    } else if ('message' in response) {
      this.reservationResponseMessage = response.message;
      this.messageModal.show();
    } else {
      this.successModal.show();
    }
  }
}
