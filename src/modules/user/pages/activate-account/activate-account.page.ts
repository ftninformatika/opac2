import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../../core/services/users.service';
import { ILibraryMember } from '../../../../models/library-member.model';
import { EPasswordCodes, MinimumPasswordStrengthRegex } from '../../../../utils/regexes';
import { Subject, } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ToastService } from 'ng-uikit-pro-standard';

@Component({
  selector: 'activate-acount-page',
  templateUrl: 'activate-account.page.html',
  styleUrls: ['activate-account.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ActivateAccountPage implements OnInit {

  private readonly _activatedRoute: ActivatedRoute;
  private readonly _router: Router;
  private readonly _userService: UsersService;
  private readonly _toastService: ToastService;
  private pass1Changed: Subject<string> = new Subject<string>();
  private pass2Changed: Subject<string> = new Subject<string>();
  public libraryMember: ILibraryMember;
  public activationToken: string;
  public pass1: string;
  public pass2: string;
  public isValid: boolean;

  public constructor(activatedRoute: ActivatedRoute, router: Router, userService: UsersService, toastService: ToastService) {
    this._activatedRoute = activatedRoute;
    this._router = router;
    this._userService = userService;
    this._toastService = toastService;
    this.libraryMember = null;
    this.isValid = false;
    this.pass1 = '';
    this.pass2 = '';
    this.pass1Changed.pipe(
      debounceTime(650),
      distinctUntilChanged()
    ).subscribe(() => this.validatePasswords());
    this.pass2Changed.pipe(
      debounceTime(650),
      distinctUntilChanged()
    ).subscribe(() => this.validatePasswords());
  }

  public ngOnInit(): void {
    this.activationToken = this._activatedRoute.snapshot.paramMap.get('activateToken');
    this._userService.getUserByActivationToken(this.activationToken).subscribe(
      (resp: ILibraryMember) => {
        this.libraryMember = resp;
      },
      () => {
        this._router.navigate(['errors/not-found']);
      }
    );
  }

  public activateAccount(): void {
    if (this.validatePasswords() === EPasswordCodes.PasswordsMatch) {
      this.libraryMember.password = this.pass1;
      this._userService.activateAccount(this.libraryMember).subscribe(
        response => {
          if (response) {
            this._toastService.success('Успешно сте активирали OPAC налог, можете се пријавити!', 'Успешно');
            this._router.navigate(['/user/login']);
          } else {
            this._toastService.warning('Дошло је до грешке приликом активације налога!');
          }
        },
        () => {
          this._toastService.warning('Дошло је до грешке приликом активације налога!');
        }
      );
    } else {
      this._toastService
        .info('Молимо вас унесите жељену лозинку, која ће задовољити критеријум: 6 знакова, минимум једно велико слово и један број!');
    }
  }

  public validatePasswords(): EPasswordCodes {
    const reg = new RegExp(MinimumPasswordStrengthRegex);
    if (!this.pass1 && !this.pass2) {
      this.isValid = false;
      return EPasswordCodes.PasswordEmpty;
    } else if (this.pass1 !== this.pass2) {
      this.isValid = false;
      return EPasswordCodes.PasswordsDontMatch;
    } else  if (reg.test(this.pass1) && reg.test(this.pass2)) {
      this.isValid = true;
      return EPasswordCodes.PasswordsMatch;
    } else {
      this.isValid = false;
      return EPasswordCodes.PasswordNotStrongEnough;
    }
  }

  public changed1(text: string) {
    this.pass1Changed.next(text);
  }

  public changed2(text: string) {
    this.pass2Changed.next(text);
  }
}

