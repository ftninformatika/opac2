import { ERecordFormatType } from '../../../core/pipes/record-format.pipe';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BooksService } from '../../../core/services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../../../models/book.model';
import { BookCoverUtils } from '../../../../utils/book-cover.utils';
import { ConfigState } from '../../../core/states/config/config.state';
import { Store } from '@ngxs/store';

@Component({
  selector: 'book-page',
  templateUrl: 'book.page.html',
  styleUrls: ['book.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookPage implements OnInit {
  private readonly _booksService: BooksService;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _router: Router;
  private readonly _store: Store;
  private RecordFormatType = ERecordFormatType;
  public book: Book;
  public errImgUrl: string;
  public lib: string;

  public constructor(booksService: BooksService, activatedRoute: ActivatedRoute, router: Router, store: Store) {
    this._booksService = booksService;
    this._activatedRoute = activatedRoute;
    this._router = router;
    this._store = store;
    this.errImgUrl = BookCoverUtils.getBlankBookCover();
  }

  public ngOnInit(): void {
    this.lib = this._store.selectSnapshot(ConfigState.library);
    this._activatedRoute.paramMap.subscribe(params => {
      const lib = params.get('lib');
      const bookId = params.get('id');
      if (lib && lib !== this.lib) {
        this._router.navigate([`lib/${lib}`], {state: {proceedUrl : `/book/${bookId}`}});
        return;
      }
      this._booksService.getBook(bookId).subscribe(
        data => {
          if (!data) {
            this._router.navigate(['/error/not-found']);
          } else {
            this.book = data;
            // console.log(this.book);
          }
        },
        () => this._router.navigate(['/error/not-found']));
    });
  }

}
