import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../services/books.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../../models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  book: Book;

  constructor(private booksService: BooksService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const bookId = +params.get('id');
      this.booksService.getBookById(bookId).subscribe(data => {
        this.book = data;
      });
    });
  }
}
