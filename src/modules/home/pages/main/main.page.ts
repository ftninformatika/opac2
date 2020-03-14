import {BookCollectionModel} from '../../../../models/book-collection.model';
import { ConfigState } from '../../../core/states/config/config.state';
import { BooksService } from '../../../core/services/books.service';
import {CodersService} from '../../../core/services/coders.service';
import {UsersService} from '../../../core/services/users.service';
import {ICoder} from '../../../../models/coders/coder.model';
import { Book } from '../../../../models/book.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss']
})
export class MainPage implements OnInit {

  private readonly _booksService: BooksService;
  private readonly _userService: UsersService;
  private readonly _codersService: CodersService;
  private readonly _store: Store;
  public collWithBooksWrapper: {coll: BookCollectionModel, books: Book[]}[];
  public libFullName: string;
  public kioskCoder: ICoder;

  public constructor(booksService: BooksService, userService: UsersService, store: Store, codersService: CodersService) {
    this._booksService = booksService;
    this._userService = userService;
    this._codersService = codersService;
    this._store = store;
    this.collWithBooksWrapper = [];
    this.libFullName = this._store.selectSnapshot(ConfigState.fullLibName);
  }

  public ngOnInit(): void {
    this._userService.getShowableCollections().subscribe(
      response => {
        for (const coll1 of response) {
          this._booksService.getBooksByCollId(coll1._id).subscribe(
            books1 => {
              this.collWithBooksWrapper.push({
                coll: coll1,
                books: books1
              });
            }
          );
        }
      }
    );
    this.kioskCoder = this._store.selectSnapshot(ConfigState.getKioskSubLocation);
  }


}
