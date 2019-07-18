import { IUserModel } from '../../../../models/circ/user.model';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { UsersService } from '../../services/users.service';
import { ILibraryMember } from '../../../../models/library-member.model';
import { IMemberWrapper } from '../../../../models/member-wrapper';
import { ToastService } from 'ng-uikit-pro-standard';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

export interface IUserStateModel {
  accessToken: string;
  userData: IUserModel;
  user: ILibraryMember;
}

export const InitialState: IUserStateModel = {
  accessToken: null,
  userData: null,
  user: null
};

export class SignInAction {
  static readonly type = '[User] Sign In User';
  public username: string;
  public password: string;
  public constructor(username: string, password: string) {
   this.username = username;
   this.password = password;
  }
}

export class SignOutAction {
  static readonly type = '[User] Sing Out User';
  public constructor() {}
}

@State<IUserStateModel>({
  name: 'USER_STATE',
  defaults: InitialState
})
export class UserState {
  private readonly _userService: UsersService;
  private readonly _toastService: ToastService;
  private readonly _router: Router;
  private readonly _translateService: TranslateService;

  @Selector()
  public static token(state: IUserStateModel) { return state.accessToken; }

  @Selector()
  public static library(state: IUserStateModel) {
    if (state.user && state.user.libraryPrefix) {
      return state.user.libraryPrefix;
    }
    return null;
  }

  // TODO: i18n toast messages using translate service
  public constructor(userService: UsersService, toastService: ToastService, router: Router, translateService: TranslateService) {
    this._userService = userService;
    this._toastService = toastService;
    this._router = router;
    this._translateService = translateService;
  }

  @Action(SignInAction)
  public signIn(ctx: StateContext<IUserStateModel>, action: SignInAction) {
    this._userService.login(action).subscribe(
      (response: IMemberWrapper) => {
        if (!response.member || !response.libraryMember || !response.libraryMember.authToken) {
          this._toastService.warning('Нешто је пошло по злу!');
          return;
        }
        ctx.patchState({
          userData: response.member,
          user: response.libraryMember,
          accessToken: response.libraryMember.authToken
        });
      },
    () => {
      this._toastService.warning('Серверска грешка приликом пријављивања!');
    }
    );
  }

  @Action([SignOutAction])
  public signOut(ctx: StateContext<IUserStateModel>, action: SignOutAction) {
    ctx.setState(InitialState);
  }
}
