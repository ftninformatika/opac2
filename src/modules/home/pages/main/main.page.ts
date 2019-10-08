import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../core/services/books.service';
import { Book } from '../../../../models/book.model';
import {UsersService} from '../../../core/services/users.service';
import {BookCollectionModel} from '../../../../models/book-collection.model';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss']
})
export class MainPage implements OnInit {

  private readonly _booksService: BooksService;
  private readonly _userService: UsersService;
  public collections: BookCollectionModel[];
  public recommendedBooks: Book[];
  public newBooks: Book[];

  public constructor(booksService: BooksService, userService: UsersService) {
    this._booksService = booksService;
    this._userService = userService;
  }

  public ngOnInit(): void {
    this.newBooks = this._booksService.getNewBooks();
    this.recommendedBooks = this._booksService.getRecommendedBooks();
    this._userService.getShowableCollections().subscribe(
      resp => {
        if (!resp) {
          return;
        }
        for (const coll in resp) {
        //  TODO
        }
      }
    )
  }
}
