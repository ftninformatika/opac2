import { BookCollectionModel } from '../../../../models/book-collection.model';
import { UsersService } from '../../../core/services/users.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BooksService } from '../../../core/services/books.service';
import { UserState } from '../../../core/states/user/user.state';
import { ToastService } from 'ng-uikit-pro-standard';
import { Book } from '../../../../models/book.model';
import { Store } from '@ngxs/store';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'admin-collections-page',
  templateUrl: 'admin-collections.page.html',
  styleUrls: ['admin-collections.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminCollectionsPage implements OnInit {
  private readonly _userService: UsersService;
  private readonly _toastService: ToastService;
  private readonly _bookService: BooksService;
  private readonly _store: Store;
  private readonly username: string;
  private readonly isAdmin: boolean;
  private readonly orderByPipe: OrderPipe;
  public collections: BookCollectionModel[];
  public newCollectionName: string;
  public selectedCollection: BookCollectionModel;
  public selectedCollectionBooks: Book[];
  public selectedCollectionEdited: boolean;

  public constructor(store: Store, userService: UsersService, toastService: ToastService,
                     bookService: BooksService, orderByPipe: OrderPipe) {
    this._store = store;
    this._userService = userService;
    this._toastService = toastService;
    this._bookService = bookService;
    this.orderByPipe = orderByPipe;
    this.username = this._store.selectSnapshot(UserState.username);
    this.isAdmin = this._store.selectSnapshot(UserState.admin);
    this.selectedCollection = null;
    this.selectedCollectionEdited = false;
  }

  public ngOnInit(): void {
    this.loadCollectionsAndSelectIndex();
  }

  public async drop(event: CdkDragDrop<string[]>) {
    try {
      const done = await this._userService.swapIndexes(event.previousIndex, event.currentIndex).toPromise();
      if (!done) {
        this._toastService.warning('Серверска грешка');
        return;
      }
      this.loadCollectionsAndSelectIndex(event.currentIndex);
    } catch (e) {
      this._toastService.warning('Дошло је до грешке');
      console.log(e.toString());
    }
  }

  public selectCollection(index: number = 0) {
    if (this.selectedCollectionEdited) {
    //  TODO: Pop the modal if something is changed in collection
    }
    this.selectedCollection = this.collections.find(c => c.index === index);
    if (!this.selectedCollection) {
      this.selectedCollectionBooks = null;
      return;
    }
    this.selectedCollectionEdited = false;
    this._bookService.getBooksByCollId(this.selectedCollection._id).subscribe(
      r => this.selectedCollectionBooks = r
    );
  }

  public createCollection() {
    if (!this.isAdmin || !this.username) {
      return;
    }
    if (!this.newCollectionName || this.newCollectionName.trim() === '') {
      this._toastService.warning('Унесите јединствено име нове колекције!');
      return;
    }
    const newCollection: BookCollectionModel = {
      recordsIds: [],
      creatorUsername: this.username,
      title: this.newCollectionName,
      creationDate: new Date(),
      index: -2
    };
    this._userService.adminCreateModifyCollection(newCollection).subscribe(
      (respondStatus) => {
        if (!respondStatus) {
          this._toastService.warning('Максималан број колекција је 15, а максималан број записа у колекцији 30.' +
            '\nНе можете направити више колекција са истим насловом!');
        } else {
          this._toastService.success(`Успешно сте креирали колекцију: ${this.newCollectionName}`);
          this.loadCollections();
        }
      },
    () => this._toastService.warning('Максималан број колекција је 15, а максималан број записа у колекцији 30.' +
      ' Назив колекције је јединствен!')
    );
  }

  public deleteCollection(collId: string) {
    this._userService.deleteCollectionById(collId).subscribe(
      deleted => {
        if (!deleted) {
          this._toastService.warning('Дошло је до грешке, колекција није обрисана!');
        } else {
          this._toastService.success('Колеција је обрисана!');
          this.selectedCollection = null;
          this.selectedCollectionBooks = null;
          this.loadCollectionsAndSelectIndex();
        }
      },
      () => this._toastService.warning('Дошло је до грешке, колекција није обрисана!')
    );
  }

  private loadCollectionsAndSelectIndex(index: number = 0) {
    this._userService.getBookCollections().subscribe(
      coll => {
        this.collections = this.orderByPipe.transform(coll, 'index');
        if (this.collections.length > 0) {
          this.selectCollection(index);
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
