import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UsersService } from '../../../core/services/users.service';
import { Book } from '../../../../models/book.model';
import { Store } from '@ngxs/store';
import { RemoveFromShelfAction, UserState } from '../../../core/states/user/user.state';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.page.html',
  styleUrls: ['./shelf.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShelfPage implements OnInit {

  private readonly _userService: UsersService;
  private readonly _store: Store;
  private email: string;
  public shelf: Book[];

  constructor(userService: UsersService, store: Store) {
    this._userService = userService;
    this._store = store;
    this.shelf = [];
    this.email = this._store.selectSnapshot(UserState.username);
  }

  ngOnInit() {
    if (!this.email) {
      return;
    }
    this.getShelf();
  }

  public removeFromShelf(bookId: string) {
    this._store.dispatch(new RemoveFromShelfAction(bookId));
    this.getShelf();
  }

  private getShelf() {
    this._userService.getShelf(this.email).subscribe(data => {
      this.shelf = data;
    });
  }
}
