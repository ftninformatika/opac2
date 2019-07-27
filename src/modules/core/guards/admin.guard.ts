import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngxs/store';
import { UserState } from '../states/user/user.state';

@Injectable()
export class AdminGuard implements CanActivate {

  private readonly _store: Store;
  public constructor(store: Store) {
    this._store = store;
  }

  public canActivate(): boolean {
    return this._store.selectSnapshot(UserState.admin);
  }
}
