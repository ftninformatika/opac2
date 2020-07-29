import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../core/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { SignInAction, SignOutAction } from '../../../core/states/user/user.state';
import { ILoginDto } from '../../../../models/library-member.model';
import { ToastService } from 'ng-uikit-pro-standard';
import { MinimumPasswordStrengthRegex } from '../../../../utils/regexes';
import { LibraryConfigurationService } from '../../../core/services/library-configuration.service';
import { ILibraryConfigurationModel } from '../../../../models/library-configuration.model';
import { ChangeConfigAction, ConfigState } from '../../../core/states/config/config.state';
import {ICoder} from '../../../../models/coders/coder.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  encapsulation: ViewEncapsulation.None
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
  public forgotPassEmail: string;
  public nextUrl: string;
  public kioskCoder: ICoder;

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
    this.kioskCoder = this._store.selectSnapshot(ConfigState.getKioskSubLocation);
  }

  public ngOnInit() {
    if (this.kioskCoder) {
      this._router.navigate(['/']);
    }
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(MinimumPasswordStrengthRegex)]],
    });
    this._activatedRoute.queryParamMap.subscribe(params => {
      this.nextUrl = params.get('next');
    });
    this.forgotPassEmail = '';
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
      res => {
        this._libConfService.getAllBriefConfigs().subscribe(
          (configs: ILibraryConfigurationModel[]) => {
            if (!res.USER_STATE || !res.USER_STATE.user || !res.USER_STATE.user.libraryPrefix) {
              this._store.dispatch(new SignOutAction());
            } else {
              const usrLib = res.USER_STATE.user.libraryPrefix;
              if (configs.some(e => e.libraryName === usrLib)) {
                if (this._store.selectSnapshot(ConfigState.library) !== usrLib) {
                  this._store.dispatch(new ChangeConfigAction(configs.find(e => e.libraryName === usrLib)));
                }
                this._router.navigate(['/']);
              } else {
                this._store.dispatch(new SignOutAction());
              }
            }
          },
          () => {
            this._store.dispatch(new SignOutAction());
          }
        );
      }
    );
  }

  public forgotPassword(): void {
    this._toastService.clear();
    if (!this.validateEmail(this.forgotPassEmail)) {
      this._toastService.warning('Унесите исправан формат e-mail адресе!');
      return;
    }
    this._usersService.forgotPassword(this.forgotPassEmail).subscribe(data => {
      if (data) {
        this._toastService.success('Линк за промену лозинке је послат на вашу e-mail адресу!');
        this._router.navigate(['/']);
      } else {
        this._toastService.warning('Дошло је до грешке!');
      }
    });
  }

  public validateEmail(email): boolean {
    // tslint:disable-next-line:max-line-length
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
