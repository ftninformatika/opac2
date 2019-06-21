import { Component, OnInit } from '@angular/core';
import { Book } from '../../../core/models/book';
import { BooksService } from '../../../core/services/books.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'book2-page',
  templateUrl: 'book2.page.html',
  styleUrls: ['book2.page.scss']
})
export class Book2Page implements OnInit {
  private readonly _booksService: BooksService;
  private readonly _activatedRoute: ActivatedRoute;
  public book: Book;

  public constructor(booksService: BooksService, activatedRoute: ActivatedRoute) {
    this._booksService = booksService;
    this._activatedRoute = activatedRoute;
  }

  public ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      const bookId = + params.get('id');
      this._booksService.getBookById(bookId).subscribe(data => {
        this.book = data;
      });
    });
  }
}
