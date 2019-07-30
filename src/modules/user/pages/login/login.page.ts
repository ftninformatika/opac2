import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../core/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { InitialUserState, IUserStateModel, SignInAction } from '../../../core/states/user/user.state';
import { ILoginDto } from '../../../../models/library-member.model';
import { ToastService } from 'ng-uikit-pro-standard';
import { MinimumPasswordStrengthRegex } from '../../../../utils/regexes';
import { LibraryConfigurationService } from '../../../core/services/library-configuration.service';
import { ILibraryConfigurationModel } from '../../../../models/library-configuration.model';
import { ChangeConfigAction } from '../../../core/states/config/config.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  private readonly _formBuilder: FormBuilder;
  private readonly _usersService: UsersService;
  private readonly _router: Router;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _store: Store;
  private readonly _toastService: ToastService;
  private readonly _libConfService: LibraryConfigurationService;
  public loginForm: FormGroup;
  public nextUrl: string;

  public constructor(formBuilder: FormBuilder, usersService: UsersService, router: Router,
                     activatedRoute: ActivatedRoute, store: Store,
                     toastService: ToastService, libConfService: LibraryConfigurationService) {
    this._formBuilder = formBuilder;
    this._usersService = usersService;
    this._router = router;
    this._activatedRoute = activatedRoute;
    this._toastService = toastService;
    this._store = store;
    this._libConfService = libConfService;
  }

  public ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(MinimumPasswordStrengthRegex)]],
    });
    this._activatedRoute.queryParamMap.subscribe(params => {
      this.nextUrl = params.get('next');
    });
  }

  public login(): void {
    const loginDto: ILoginDto = {
      username: this.loginForm.value.email.trim(),
      password: this.loginForm.value.password.trim()
    };
    if (this.loginForm.invalid || !this.loginForm.touched) {
      this._toastService.warning('Унесите исправну e-mail адресу и лозинку!');
      return;
    }
    this._store.dispatch(new SignInAction(loginDto.username, loginDto.password)).subscribe(
      () => this._router.navigate(['/'])
    );
  }

  public forgotPassword(): void {
    const email = this.loginForm.value.email.trim();
    this._usersService.forgotPassword(email).subscribe(data => {
      if (data) {
        // TODO: message "email sent"
        console.log('forgot password: true');
      } else {
        // TODO: message "email unknown"
        console.log('forgot password: false');
      }
    });
  }

  // For testing purposes only TODO: delete this later
  public dummyLogin(): void {
    this._store.dispatch(new SignInAction('', ''));
    this._router.navigate(['']);
  }

}
