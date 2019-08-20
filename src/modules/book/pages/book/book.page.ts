import { BooksService } from '../../../core/services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Book } from '../../../../models/book.model';
import { ERecordFormatType } from '../../../core/pipes/record-format.pipe';
import { TabsetComponent } from 'ng-uikit-pro-standard';

@Component({
  selector: 'book-page',
  templateUrl: 'book.page.html',
  styleUrls: ['book.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookPage implements OnInit, AfterViewInit {
  private readonly _booksService: BooksService;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _router: Router;
  public book: Book;
  private RecordFormatType = ERecordFormatType;
  @ViewChild('staticTabs', { static: true }) staticTabs: TabsetComponent;

  public constructor(booksService: BooksService, activatedRoute: ActivatedRoute, router: Router) {
    this._booksService = booksService;
    this._activatedRoute = activatedRoute;
    this._router = router;
  }

  public ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      const bookId = params.get('id');
      this._booksService.getBook(bookId).subscribe(
        data => {
          if (!data) {
            this._router.navigate(['/error/not-found']);
          } else {
            this.book = data;
            console.log(this.book);
          }
        },
        () => this._router.navigate(['/error/not-found']));
    });
  }

  public ngAfterViewInit(): void {
    // this.staticTabs.setActiveTab(2);
  }
}
