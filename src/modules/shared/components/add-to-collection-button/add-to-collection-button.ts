import {BookCollectionModel} from '../../../../models/book-collection.model';
import {UsersService} from '../../../core/services/users.service';
import {UserState} from '../../../core/states/user/user.state';
import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngxs/store';
import {ToastService} from 'ng-uikit-pro-standard';

@Component({
  selector: 'add-to-collection-button',
  templateUrl: 'add-to-collection-button.html',
  styleUrls: ['add-to-collection-button.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddToCollectionButton implements OnInit {
  @Input() bookId: string;
  @Input() compaq: boolean;
  private readonly  _store: Store;
  private readonly _userService: UsersService;
  private readonly _toastService: ToastService;
  private readonly lib: string;
  public collections: BookCollectionModel[];

  public constructor(store: Store, userService: UsersService, toastService: ToastService) {
    this._store = store;
    this._userService = userService;
    this._toastService = toastService;
    this.lib = this._store.selectSnapshot(UserState.library);
  }

  public addToCollection(collectionIdE: string, recordIdE: string) {
    if (!collectionIdE || !recordIdE) {
      return;
    }
    if (this.collections && this.collections.find(coll => coll._id === collectionIdE).recordsIds.indexOf(recordIdE) >= 0) {
      this._toastService.warning($localize`:@@knjigaPostojiUKolekciji:Књига већ постоји у одабраној колекцији!`);
      return;
    }
    this._userService.addRecordToCollection({collectionId: collectionIdE, recordId: recordIdE})
      .subscribe(
        resp => {
          if (!resp) {
            this._toastService.warning($localize`:@@nijeUspeloDodavanjeUKolekciju:Није успело додавање књиге у колекцију!`);
          } else {
            this._toastService.success($localize`:@@uspesnoSteDodaliUKolekciju:Успешно сте додали књигу у колекцију!`);
          }
        },
        () => this._toastService.warning($localize`:@@nijeUspeloDodavanjeUKolekciju:Није успело додавање књиге у колекцију!`)
      );
  }

  public ngOnInit(): void {
    this._userService.getBookCollections().subscribe(
      resp => {
        this.collections = resp;
      }
    );
  }

}
