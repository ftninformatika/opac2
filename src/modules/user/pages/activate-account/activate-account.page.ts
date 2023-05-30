import { ILibraryMember } from '../../../../models/library-member.model';
import { ValidatorsUtils } from '../../../../utils/validators.utils';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { UsersService } from '../../../core/services/users.service';
import { EPasswordCodes } from '../../../../utils/regexes';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'ng-uikit-pro-standard';
import { Subject, } from 'rxjs';
import { SignOutAction } from '../../../core/states/user/user.state';
import { Store } from '@ngxs/store';
import { ChangeConfigAction, ConfigState } from '../../../core/states/config/config.state';

@Component({
  selector: 'activate-acount-page',
  templateUrl: 'activate-account.page.html',
  styleUrls: ['activate-account.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ActivateAccountPage implements OnInit {

  private readonly _activatedRoute: ActivatedRoute;
  private readonly _router: Router;
  private readonly _store: Store;
  private readonly _userService: UsersService;
  private readonly _toastService: ToastService;
  public pass1Changed: Subject<string> = new Subject<string>();
  public pass2Changed: Subject<string> = new Subject<string>();
  public restartPasswordMode: boolean;
  public libraryMember: ILibraryMember;
  public activationToken: string;
  public pass1: string;
  public pass2: string;
  public isValid: boolean;

  public constructor(activatedRoute: ActivatedRoute, router: Router, userService: UsersService, toastService: ToastService, store: Store) {
    this._activatedRoute = activatedRoute;
    this._router = router;
    this._store = store;
    this._userService = userService;
    this._toastService = toastService;
    this.libraryMember = null;
    this.isValid = false;
    this.restartPasswordMode = false;
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

  public ngOnInit(): void {
    this.activationToken = this._activatedRoute.snapshot.paramMap.get('activateToken');
    if (this._activatedRoute.snapshot.url.join('').includes('restart-password')) {
      this.restartPasswordMode = true;
    }
    this._userService.getUserByActivationToken(this.activationToken).subscribe(
      async (resp: ILibraryMember) => {
        const currentLibrary = this._store.selectSnapshot(ConfigState.library);
        this.libraryMember = resp;
        if (!this.libraryMember || !this.libraryMember.libraryPrefix) {
          this._router.navigate(['errors/not-found']);
        }
        await this._store.dispatch(new SignOutAction());
        if (currentLibrary !== this.libraryMember.libraryPrefix) {
          await this._router.navigate([`lib/${this.libraryMember.libraryPrefix}`],
            {state: {proceedUrl: `/user/activate-account/${this.activationToken}`}});
          return;
        }
      },
      () => {
        this._router.navigate(['errors/not-found']);
      }
    );
  }

  public activateAccount(): void {
    this.isValid = ValidatorsUtils.validatePasswords(this.pass1, this.pass2) === EPasswordCodes.PasswordsMatch;
    if (this.isValid) {
      this.libraryMember.password = this.pass1;
      this._userService.activateAccount(this.libraryMember).subscribe(
        response => {
          if (response) {
            this.restartPasswordMode ?
              this._toastService.success('Успешно сте променили лозинку вашег налога, можете се пријавити!')
              : this._toastService.success('Успешно сте активирали OPAC налог, можете се пријавити!');
            this._router.navigate(['/user/login']);
          } else {
            this._toastService.warning('Дошло је до грешке!');
          }
        },
        () => {
          this._toastService.warning('Дошло је до грешке!');
        }
      );
    } else {
      this._toastService
        .info('Молимо вас унесите жељену лозинку, која ће задовољити критеријум: 6 знакова, минимум једно велико слово и један број!');
    }
  }
}

