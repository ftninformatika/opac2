import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../core/services/users.service';
import { Book } from '../../../../models/book.model';
import { Select, Store } from '@ngxs/store';
import { UserState } from '../../../core/states/user/user.state';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.page.html',
  styleUrls: ['./shelf.page.scss']
})
export class ShelfPage implements OnInit {

  private readonly _userService: UsersService;
  private readonly _store: Store;
  public shelf: Book[];

  constructor(userService: UsersService, store: Store) {
    this._userService = userService;
    this._store = store;
    this.shelf = [];
  }

  ngOnInit() {
    const email = this._store.selectSnapshot(UserState.username);
    if (!email) {
      return;
    }
    this._userService.getShelf(email).subscribe(data => {
      this.shelf = data;
    });
  }

}
