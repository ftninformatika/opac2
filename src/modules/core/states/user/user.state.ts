import { IUserModel } from '../../models/circ/user.model';
import { Action, State, StateContext } from '@ngxs/store';
import { UsersService } from '../../services/users.service';
import { Observable } from 'rxjs';

export interface IUserStateModel {
  loggedIn: boolean;
  accessToken: string;
  userData: IUserModel;
}

export const InitialState: IUserStateModel = {
  loggedIn: false,
  accessToken: null,
  userData: null
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
  public username: string;
  public constructor(username: string) {
    this.username = username;
  }
}

@State<IUserStateModel>({
  name: 'USER_STATE',
  defaults: InitialState
})
export class UserState {
  private readonly _userService: UsersService;

  public constructor(userService: UsersService) {
    this._userService = userService;
  }

  @Action(SignInAction, {cancelUncompleted: true})
  public signIn(ctx: StateContext<UserState>, action: SignInAction) {}

  @Action([SignOutAction])
  public signOut(ctx: StateContext<UserState>, action: SignOutAction) {}
}
