import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngxs/store';
import { UserState } from '../../../core/states/user/user.state';
import { UsersService } from '../../../core/services/users.service';
import { BookCollectionModel } from '../../../../models/book-collection.model';
import { ToastService } from 'ng-uikit-pro-standard';

@Component({
  selector: 'admin-collections-page',
  templateUrl: 'admin-collections.page.html',
  styleUrls: ['admin-collections.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminCollectionsPage {
  private readonly _userService: UsersService;
  private readonly _toastService: ToastService;
  private readonly _store: Store;
  private readonly username: string;
  private readonly isAdmin: boolean;
  public newCollectionName: string;

  public constructor(store: Store, userService: UsersService, toastService: ToastService) {
    this._store = store;
    this._userService = userService;
    this._toastService = toastService;
    this.username = this._store.selectSnapshot(UserState.username);
    this.isAdmin = this._store.selectSnapshot(UserState.admin);
  }

  public createCollection() {
    if (!this.isAdmin || !this.username) {
      return;
    }
    const newCollection: BookCollectionModel = {
      bookIds: [],
      creatorUsername: this.username
    };
    this._userService.adminCreateModifyCollection(newCollection).subscribe(
      (respondStatus) => {
        if (!respondStatus) {
          this._toastService.warning('Дошло је до грешке приликом креирања нове колекције');
        } else {
          this._toastService.success(`Успешно сте креирали колекцију: ${this.newCollectionName}`);
        }
      }
    );
  }

}
