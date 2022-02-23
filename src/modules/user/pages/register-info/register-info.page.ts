import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngxs/store';
import {ConfigState} from '../../../core/states/config/config.state';
import {SignOutAction, UserState} from '../../../core/states/user/user.state';

@Component({
  selector: 'register-info-page',
  templateUrl: 'register-info.page.html',
  styleUrls: ['register-info.page.scss']
})
export class RegisterInfoPage implements OnInit {

  public bgbRegister = false;

  constructor(private _router: Router,
              private _store: Store,
              private _activatedRoute: ActivatedRoute) {}

  public async ngOnInit() {
    const currentLibrary = this._store.selectSnapshot(ConfigState.library);
    const isSignedIn = this._store.selectSnapshot(UserState.username) != null;
    const lib = this._activatedRoute.snapshot.paramMap.get('lib');
    if (lib === 'bgb' || currentLibrary === 'bgb') {
      this.bgbRegister = true;
    }
    if (lib) {
      if (isSignedIn) {
        await this._store.dispatch(new SignOutAction());
      }
      if (currentLibrary !== lib) {
        await this._router.navigate([`lib/${lib}`],
          {state: {proceedUrl: `/user/register-info/${lib}`}});
      }
    }

  }
}
