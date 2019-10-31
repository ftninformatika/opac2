import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { BooksService } from '../../../core/services/books.service';
import { ToastService } from 'ng-uikit-pro-standard';
import { Store } from '@ngxs/store';
import { UserState } from '../../../core/states/user/user.state';
import { AvgRecordRating, RecordRating } from '../../../../models/book.model';

@Component({
  selector: 'book-star-rating',
  templateUrl: 'book-star-rating.html',
  styleUrls: ['book-star-rating.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookStarRating implements OnInit {
  private readonly _bookService: BooksService;
  private readonly _toastService: ToastService;
  private readonly _store: Store;

  @Input() recordId: string;
  @Input() bookRating: AvgRecordRating;
  @Input() totalRatings: number;
  @Input() allRatings: RecordRating[];
  public starRate;
  public username: string;
  public libraryMemberId: string;

  public constructor(bookService: BooksService, toastService: ToastService, store: Store) {
    this._bookService = bookService;
    this._toastService = toastService;
    this._store = store;
    this.username = this._store.selectSnapshot(UserState.username);
    this.libraryMemberId = this._store.selectSnapshot(UserState._id);
    this.starRate = 0;
  }

  public ngOnInit(): void {
    if (!this.allRatings) {
      return;
    }
    const userRated = this.allRatings.find(rating => rating.libraryMemberId === this.libraryMemberId);
    if (!userRated) {
      return;
    }
    this.starRate = userRated.givenRating;
  }

  public rateBook(currentRate) {
    if (!this.recordId || !currentRate) {
      return;
    }
    if (!this.username) {
      this._toastService.info('Морате бити пријављени како би оценили књигу!');
      return;
    }
    const newRating: RecordRating = {
      givenRating: currentRate,
      libraryMemberId: this.libraryMemberId,
      username: this.username
    };
    this._bookService.rateRecord(newRating, this.recordId).subscribe(
      (resp) => {
        if (!resp) {
          this._toastService.warning('Дошло је до грешке приликом оцењивања записа!');
          return;
        }
        this.totalRatings = resp.totalRates;
        this.bookRating = resp;
        this.starRate = resp.avgRating;
      }
    );
  }
}
