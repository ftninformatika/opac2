import { Book } from '../../../core/models/book';
import { BooksService } from '../../../core/services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'book2-page',
  templateUrl: 'book2.page.html',
  styleUrls: ['book2.page.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Book2Page implements OnInit {
  private readonly _booksService: BooksService;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _router: Router;
  public book: Book;

  public constructor(booksService: BooksService, activatedRoute: ActivatedRoute, router: Router) {
    this._booksService = booksService;
    this._activatedRoute = activatedRoute;
    this._router = router;
  }

  public ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      const bookId = + params.get('id');
      this._booksService.getBookById(bookId).subscribe(
        data => {
          if (!data) {
            this._router.navigate(['/error/not-found']);
          } else {
            this.book = data;
          }
        },
        () => this._router.navigate(['/error/not-found']));
    });
  }
}
