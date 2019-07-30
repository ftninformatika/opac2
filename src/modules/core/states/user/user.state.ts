import { IUserModel } from '../../../../models/circ/user.model';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { UsersService } from '../../services/users.service';
import { EAuthority, ILibraryMember } from '../../../../models/library-member.model';
import { ToastService } from 'ng-uikit-pro-standard';
import { TranslateService } from '@ngx-translate/core';
import { IMemberWrapper } from '../../../../models/member-wrapper.model';

export interface IUserStateModel {
  accessToken: string;
  userData: IUserModel;
  user: ILibraryMember;
}

export const InitialUserState: IUserStateModel = {
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
  defaults: InitialUserState
})
export class UserState {
  private readonly _userService: UsersService;
  private readonly _toastService: ToastService;
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

  @Selector()
  public static roles(state: IUserStateModel) {
    if (state.user && state.user.authorities) {
      return state.user.authorities;
    }
    return null;
  }

  @Selector()
  public static admin(state: IUserStateModel): boolean {
    return (state.user && state.user.authorities
      && state.user.authorities.includes(EAuthority.LibraryAdmin));
  }


  // TODO: i18n toast messages using translate service
  public constructor(userService: UsersService, toastService: ToastService, translateService: TranslateService) {
    this._userService = userService;
    this._toastService = toastService;
    this._translateService = translateService;
  }

  @Action(SignInAction)
  public async signIn(ctx: StateContext<IUserStateModel>, action: SignInAction) {
    let response: IMemberWrapper = null;
    try {
      response = await this._userService.login(action).toPromise();
    } catch (e) {
      this._toastService.warning('Погрешна e-mail адреса или лозинка!');
      return;
    }
    if (!response.member || !response.libraryMember || !response.libraryMember.authToken) {
          this._toastService.warning('Нешто је пошло по злу!');
          return;
        }
    ctx.patchState({
          userData: response.member,
          user: response.libraryMember,
          accessToken: response.libraryMember.authToken
        });
  }

  @Action([SignOutAction])
  public signOut(ctx: StateContext<IUserStateModel>, action: SignOutAction) {
    ctx.setState(InitialUserState);
  }
}
