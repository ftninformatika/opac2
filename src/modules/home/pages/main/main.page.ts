import { Book } from '../../../../models/book';
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../core/services/books.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss']
})
export class MainPage implements OnInit {

  private readonly _booksService: BooksService;
  public recommendedBooks: Book[];
  public newBooks: Book[];

  public constructor(booksService: BooksService) {
    this._booksService = booksService;
  }

  public ngOnInit(): void {
    this.newBooks = this._booksService.getNewBooks();
    this.recommendedBooks = this._booksService.getRecommendedBooks();
    this._booksService.searchAutoComplete('asdas').subscribe(
      resp => {
        console.log(resp);
      }
    );
  }
}
