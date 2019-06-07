import { Component, OnInit, HostListener } from '@angular/core';
import { Book } from '../../../../core/models/book';
import { BooksService } from '../../../../core/services/books.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private booksService: BooksService) { }

  newBooks: Book[];
  recommendedBooks: Book[];
  searchHits: Book[];

  ngOnInit(): void {
    this.newBooks = this.booksService.getNewBooks();
    this.recommendedBooks = this.booksService.getRecommendedBooks();
  }
}
