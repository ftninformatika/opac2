import {EAuthority, ILibraryMember} from '../../../../models/library-member.model';
import {IMemberWrapper} from '../../../../models/member-wrapper.model';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {IUserModel} from '../../../../models/circ/user.model';
import {UsersService} from '../../services/users.service';
import {TranslateService} from '@ngx-translate/core';
import {ToastService} from 'ng-uikit-pro-standard';
import {Router, RouterStateSnapshot} from '@angular/router';
import {IUserCategoryModel} from '../../../../models/circ/user-category.model';

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

  public constructor() {
  }
}


export class AddToShelfAction {
  static readonly type = '[User] Add To Shelf';
  public bookId: string;

  public constructor(bookId: string) {
    this.bookId = bookId;
  }
}

export class RemoveFromShelfAction {
  static readonly type = '[User] Remove From Shelf';
  public bookId: string;

  public constructor(bookId: string) {
    this.bookId = bookId;
  }
}

@State<IUserStateModel>({
  name: 'USER_STATE',
  defaults: InitialUserState
})
export class UserState {
  private readonly _userService: UsersService;
  private readonly _toastService: ToastService;
  private readonly _translateService: TranslateService;
  private readonly _router: Router;

  @Selector()
  public static _id(state: IUserStateModel) {
    if (state && state.user && state.user._id) {
      return state.user._id;
    }
  }

  @Selector()
  public static memberNo(state: IUserStateModel) {
    if (state && state.userData && state.userData.userId) {
      return state.userData.userId;
    }
    return null;
  }

  @Selector()
  public static getActiveSigning(state: IUserStateModel) {
    if (!state.userData || !state.userData.signings || state.userData.signings.length === 0) {
      return null;
    }
    const nowTime = new Date().getTime();
    const activeSigning = state.userData.signings.find(si => (si.untilDate && new Date(si.untilDate).getTime() > nowTime));
    return activeSigning;
  }

  @Selector()
  public static token(state: IUserStateModel) {
    return state.accessToken;
  }

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
      && state.user.authorities.includes('ROLE_ADMIN'));
  }

  @Selector()
  public static username(state: IUserStateModel): string {
    if (state.user && state.user.username) {
      return state.user.username;
    } else {
      return null;
    }
  }

  @Selector()
  public static bookshelfBooksIds(state: IUserStateModel): string[] {
    if (state.user && state.user.myBookshelfBooks && state.user.myBookshelfBooks.length > 0) {
      return state.user.myBookshelfBooks;
    } else {
      return [];
    }
  }

  @Selector()
  public static userCategory(state: IUserStateModel): IUserCategoryModel {
    if (state.userData && state.userData.userCategory) {
      return state.userData.userCategory;
    }
    return null;
  }

  public constructor(userService: UsersService, toastService: ToastService, translateService: TranslateService, router: Router) {
    this._userService = userService;
    this._toastService = toastService;
    this._translateService = translateService;
    this._router = router;
  }

  @Action(SignInAction)
  public async signIn(ctx: StateContext<IUserStateModel>, action: SignInAction) {
    let response: IMemberWrapper = null;
    this._toastService.clear();
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

  @Action(SignOutAction)
  public signOut(ctx: StateContext<IUserStateModel>, action: SignOutAction) {
    ctx.setState(InitialUserState);
  }

  @Action(AddToShelfAction)
  public async addToShelf(ctx: StateContext<IUserStateModel>, action: AddToShelfAction) {
    const state = ctx.getState();
    this._toastService.clear();
    const libraryMember = {...state.user};
    if (!ctx.getState().user) {
      await this._router.navigate(['/user/login']);
      return;
    }
    libraryMember.myBookshelfBooks = [...libraryMember.myBookshelfBooks];
    if (!action || !action.bookId) {
      this._toastService.warning('Грешка при покушају додавања књиге на полицу!');
      return;
    }
    if (!libraryMember || !libraryMember.username) {
      this._toastService.warning('Грешка при покушају додавања књиге на полицу!');
      return;
    }
    const _email = libraryMember.username;
    if (libraryMember.myBookshelfBooks.indexOf(action.bookId) !== -1) {
      this._toastService.info('Ова књига се већ налази на Вашој полици.');
      return;
    }
    let response = false;
    try {
      response = await this._userService.addToShelf({email: _email, bookId: action.bookId}).toPromise();
    } catch (e) {
      this._toastService.warning('Грешка при покушају додавања књиге на полицу!');
      return;
    }
    if (!response) {
      this._toastService.warning('Серверска грешка при покушају додавања књиге на полицу!');
      return;
    }
    libraryMember.myBookshelfBooks.push(action.bookId);
    ctx.patchState({user: libraryMember});
    this._toastService.success('Књига додата на полицу');
    return;
  }

  @Action(RemoveFromShelfAction)
  public async removeFromShelf(ctx: StateContext<IUserStateModel>, action: RemoveFromShelfAction) {
    const libraryMember = {...ctx.getState().user};
    libraryMember.myBookshelfBooks = [...libraryMember.myBookshelfBooks];
    if (!ctx.getState().user) {
      await this._router.navigate(['/user/login']);
      return;
    }
    if (!action || !action.bookId) {
      this._toastService.warning('Грешка при покушају брисања књиге са полице!');
      return;
    }
    if (!libraryMember || !libraryMember.username) {
      this._toastService.warning('Грешка при покушају брисања књиге са полице!');
      return;
    }
    const _email = libraryMember.username;
    const index = libraryMember.myBookshelfBooks.indexOf(action.bookId);
    if (index === -1) {
      this._toastService.info('Грешка при покушају склањања књиге са полице!');
      return;
    }
    let response = false;
    try {
      response = await this._userService.removeFromShelf({email: _email, bookId: action.bookId}).toPromise();
    } catch (e) {
      this._toastService.warning('Грешка при покушају склањања књиге са полице!');
      return;
    }
    if (!response) {
      this._toastService.warning('Серверска грешка при покушају склањања књиге са полице!');
      return;
    }
    libraryMember.myBookshelfBooks.splice(index, 1);
    ctx.patchState({user: libraryMember});
    this._toastService.success('Kњига склоњена са полице');
    return true;
  }
}
