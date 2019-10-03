import { BookCollectionModel } from '../../../../models/book-collection.model';
import { BooksService } from '../../../core/services/books.service';
import { Component, Input, OnInit } from '@angular/core';
import {Book} from '../../../../models/book.model';

@Component({
  selector: 'admin-collection-editor',
  templateUrl: 'admin-collection-editor.html',
  styleUrls: ['admin-collection-editor.scss']
})
export class AdminCollectionEditor implements OnInit {
  @Input() collection: BookCollectionModel;
  private readonly _bookService: BooksService;
  public books: Book[];

  public constructor(bookService: BooksService) {
    this._bookService = bookService;
    this.books = [];
  }

  public ngOnInit(): void {
    if (!this.collection || !this.collection.recordsIds) {
      return;
    }
    this._bookService.getBooks(this.collection.recordsIds)
      .subscribe(
        resp => this.books = resp
      );
  }
}
