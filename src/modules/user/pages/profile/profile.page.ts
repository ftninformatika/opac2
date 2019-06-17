import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { UserState } from '../../../core/states/user/user.state';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {

  private readonly _store: Store;
  @Select(UserState) userState;

  public constructor(store: Store) {
    this._store = store;
  }

  public ngOnInit() { }

}
