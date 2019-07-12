import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../../core/services/users.service';
import { ILibraryMember } from '../../../core/models/library-member.model';
import { EPasswordCodes, MinimumPasswordStrengthRegex } from '../../../../utils/regexes';
import { Subject, } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

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
  private libraryMember: ILibraryMember;
  private pass1Changed: Subject<string> = new Subject<string>();
  private pass2Changed: Subject<string> = new Subject<string>();
  public activationToken: string;
  public pass1: string;
  public pass2: string;
  public isValid: boolean;

  public constructor(activatedRoute: ActivatedRoute, router: Router, userService: UsersService) {
    this._activatedRoute = activatedRoute;
    this._router = router;
    this._userService = userService;
    this.isValid = false;
    this.pass1 = '';
    this.pass2 = '';
    this.pass1Changed.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(() => this.validatePasswords());
    this.pass2Changed.pipe(
      debounceTime(300),
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
    console.log(this.pass1, this.pass2);
    alert(this.validatePasswords());
  }

  public validatePasswords(): EPasswordCodes {
    console.log('validating');
    const reg = new RegExp(MinimumPasswordStrengthRegex);
    if (!this.pass1 && !this.pass2) {
      this.isValid = false;
      return EPasswordCodes.PasswordEmpty;
    }
    if (this.pass1 !== this.pass2) {
      this.isValid = false;
      return EPasswordCodes.PasswordsDontMatch;
    }
    if (reg.test(this.pass1) && reg.test(this.pass2)) {
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

