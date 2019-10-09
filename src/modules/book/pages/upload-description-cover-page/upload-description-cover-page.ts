import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngxs/store';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../../../models/book.model';
import { BooksService } from '../../../core/services/books.service';

@Component({
  selector: 'upload-description-cover-page',
  templateUrl: 'upload-description-cover-page.html',
  styleUrls: ['upload-description-cover-page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UploadDescriptionCoverPage implements OnInit {
  private readonly _store: Store;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _bookService: BooksService;
  public book: Book;

  public constructor(store: Store, activatedRoute: ActivatedRoute, bookService: BooksService) {
    this._store = store;
    this._activatedRoute = activatedRoute;
    this._bookService = bookService;
  }

  public ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(
      paramMap => {
        const bookId = paramMap.get('id');
        this._bookService.getBook(bookId).subscribe(
          resp => this.book = resp
        );
      }
    );
  }
}
