import { IUserModel } from '../../models/circ/user.model';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { UsersService } from '../../services/users.service';
import { tap } from 'rxjs/operators';

export interface IUserStateModel {
  accessToken: string;
  userData: IUserModel;
}

export const InitialState: IUserStateModel = {
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
  public constructor() {}
}

@State<IUserStateModel>({
  name: 'USER_STATE',
  defaults: InitialState
})
export class UserState {
  private readonly _userService: UsersService;

  @Selector()
  public static token(state: IUserStateModel) { return state.accessToken; }

  public constructor(userService: UsersService) {
    this._userService = userService;
  }

  // TODO: change this later
  @Action(SignInAction)
  public signIn(ctx: StateContext<IUserStateModel>, authCredentials: {username: string, password: string}) {
    this._userService.getMockUser().subscribe(
        (user: IUserModel) => {
          const newState: IUserStateModel = {
            accessToken: 'dummyjwt123',
            userData: user
          };
          ctx.patchState(newState);
        },
      error1 => { alert('handle me!'); }
      );
  }

  @Action([SignOutAction])
  public signOut(ctx: StateContext<IUserStateModel>, action: SignOutAction) {
    ctx.setState(InitialState);
  }
}
