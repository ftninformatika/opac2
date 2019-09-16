import { ValidatorsUtils } from '../../../../utils/validators.utils';
import { UsersService } from '../../../core/services/users.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { UserState } from '../../../core/states/user/user.state';
import { EPasswordCodes } from '../../../../utils/regexes';
import { ToastService } from 'ng-uikit-pro-standard';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subject } from 'rxjs';

@Component({
  selector: 'change-password-page',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss']
})
export class ChangePasswordPage implements OnInit {

  private readonly _router: Router;
  private readonly _userService: UsersService;
  private readonly _toastService: ToastService;
  private readonly _store: Store;
  private pass1Changed: Subject<string> = new Subject<string>();
  private pass2Changed: Subject<string> = new Subject<string>();
  public loggedInUsername: string;
  public pass1: string;
  public pass2: string;
  public isValid: boolean;

  public constructor(router: Router, userService: UsersService, toastService: ToastService, store: Store) {
    this._toastService = toastService;
    this._userService = userService;
    this._store = store;
    this._router = router;
    this.isValid = false;
    this.pass1 = '';
    this.pass2 = '';
    this.pass1Changed.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(() => {
      this.isValid = ValidatorsUtils.validatePasswords(this.pass1, this.pass2) === EPasswordCodes.PasswordsMatch;
    });
    this.pass2Changed.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(() => {
      this.isValid = ValidatorsUtils.validatePasswords(this.pass1, this.pass2) === EPasswordCodes.PasswordsMatch;
    });
  }

  public ngOnInit() {
    this.loggedInUsername = this._store.selectSnapshot(UserState.username);
  }

  public changePassword(): void {
    this.isValid = ValidatorsUtils.validatePasswords(this.pass1, this.pass2) === EPasswordCodes.PasswordsMatch;
    if (this.isValid) {
      this._userService.changePassword({newPassword: this.pass1, username: this.loggedInUsername}).subscribe(
        response => {
          if (response) {
            this._toastService.success('Успешно сте променили лозинку!');
            this._router.navigate(['/']);
          } else {
            this._toastService.warning('Дошло је до грешке приликом промене лозинке!');
          }
        },
        () => {
          this._toastService.warning('Дошло је до грешке приликом промене лозинке!');
        }
      );
    } else {
      this._toastService
        .info('Молимо вас унесите жељену лозинку, која ће задовољити критеријум: 6 знакова, минимум једно велико слово и један број!');
    }
  }

}
