import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BooksService } from '../../../core/services/books.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../../core/models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookPage implements OnInit {

  book: Book;

  constructor(private booksService: BooksService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const bookId = + params.get('id');
      this.booksService.getBookById(bookId).subscribe(data => {
        this.book = data;
      });
    });
  }
}
