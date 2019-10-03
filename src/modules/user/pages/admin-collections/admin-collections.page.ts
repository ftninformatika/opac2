import {Component, OnInit, ViewEncapsulation} from '@angular/core';
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
export class AdminCollectionsPage implements OnInit {
  private readonly _userService: UsersService;
  private readonly _toastService: ToastService;
  private readonly _store: Store;
  private readonly username: string;
  private readonly isAdmin: boolean;
  public collections: BookCollectionModel[];
  public newCollectionName: string;

  public constructor(store: Store, userService: UsersService, toastService: ToastService) {
    this._store = store;
    this._userService = userService;
    this._toastService = toastService;
    this.username = this._store.selectSnapshot(UserState.username);
    this.isAdmin = this._store.selectSnapshot(UserState.admin);
  }

  ngOnInit(): void {
    this.loadCollections();
  }

  public createCollection() {
    if (!this.isAdmin || !this.username) {
      return;
    }
    if (!this.newCollectionName || this.newCollectionName.trim() === '') {
      return;
    }
    const newCollection: BookCollectionModel = {
      recordsIds: [],
      creatorUsername: this.username,
      title: this.newCollectionName,
      creationDate: new Date()
    };
    this._userService.adminCreateModifyCollection(newCollection).subscribe(
      (respondStatus) => {
        if (!respondStatus) {
          this._toastService.warning('Дошло је до грешке приликом креирања нове колекције!' +
            '\nМаксималан број колекција по библиотеци је 15, а максималан број записа по колекцији 30.');
        } else {
          this._toastService.success(`Успешно сте креирали колекцију: ${this.newCollectionName}`);
          this.loadCollections();
        }
      }
    );
  }

  private loadCollections() {
    this._userService.getBookCollections().subscribe(
      coll => this.collections = coll
    );
  }

}
