import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { UserState } from '../../../core/states/user/user.state';
import { ISigningModel } from '../../../../models/circ/signing.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfilePage implements OnInit {

  private readonly _store: Store;
  @Select(UserState) userState;
  public signing: ISigningModel;
  public formatedSigningUntil: string;

  public constructor(store: Store) {
    this._store = store;
    this.signing = this._store.selectSnapshot(UserState.getActiveSigning);
    if (this.signing && this.signing.untilDate) {
      const date = new Date(this.signing.untilDate);
      this.formatedSigningUntil = date.getDay().toString() + '.' + date.getMonth().toString() + '.' + date.getFullYear().toString() + '.';
    }
  }

  public ngOnInit() { }

}
