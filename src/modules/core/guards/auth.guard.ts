import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngxs/store';
import { UserState } from '../states/user/user.state';

@Injectable()
export class AuthGuard implements CanActivate {

  private readonly _store;

  public constructor(store: Store) {
    this._store = store;
  }

  public canActivate() {
    const token = this._store.selectSnapshot(UserState.token);
    return token != null;
  }

}
