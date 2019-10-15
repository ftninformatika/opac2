import { Component, Input, ViewEncapsulation } from '@angular/core';
import { BooksService } from '../../../core/services/books.service';
import { ToastService } from 'ng-uikit-pro-standard';
import { Store } from '@ngxs/store';
import { UserState } from '../../../core/states/user/user.state';
import { RecordRating } from '../../../../models/book.model';

@Component({
  selector: 'book-star-rating',
  templateUrl: 'book-star-rating.html',
  styleUrls: ['book-star-rating.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookStarRating {
  private readonly _bookService: BooksService;
  private readonly _toastService: ToastService;
  private readonly _store: Store;

  @Input() recordId: string;
  @Input() bookRating: number;
  @Input() totalRatings: number;
  public selectedStars: number;
  public currentRate;
  public username: string;
  public libraryMemberId: string;

  public constructor(bookService: BooksService, toastService: ToastService, store: Store) {
    this._bookService = bookService;
    this._toastService = toastService;
    this._store = store;
    this.username = this._store.selectSnapshot(UserState.username);
    this.libraryMemberId = this._store.selectSnapshot(UserState._id);
  }

  public rateBook() {
    if (!this.recordId || !this.currentRate) {
      return;
    }
    if (!this.username) {
      this._toastService.info('Морате бити пријављени како би оценили књигу!');
      return;
    }
    const newRating: RecordRating = {
      givenRating: this.currentRate,
      libraryMemberId: this.libraryMemberId,
      username: this.username
    };
    this._bookService.rateRecord(newRating, this.recordId).subscribe(
      (resp: number) => {
        if (resp === -1) {
          this._toastService.warning('Дошло је до грешке приликом оцењивања записа!');
          return;
        }
        this.totalRatings++;
        this.currentRate = resp;
      }
    );
  }
}
