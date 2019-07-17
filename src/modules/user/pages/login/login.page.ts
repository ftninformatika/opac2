import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../core/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { SignInAction } from '../../../core/states/user/user.state';
import { ILoginDto } from '../../../../models/library-member.model';
import { ToastService } from 'ng-uikit-pro-standard';

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
  public loginForm: FormGroup;
  public nextUrl: string;

  public constructor(formBuilder: FormBuilder, usersService: UsersService, router: Router,
                     activatedRoute: ActivatedRoute, store: Store, toastService: ToastService) {
    this._formBuilder = formBuilder;
    this._usersService = usersService;
    this._router = router;
    this._activatedRoute = activatedRoute;
    this._toastService = toastService;
    this._store = store;
  }

  public ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
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
    this._store.dispatch(new SignInAction(loginDto.username, loginDto.password));
    // this._usersService.login(loginDto).subscribe(data => {
    //   if (data) {
    //     if (this.nextUrl) {
    //       this._router.navigate([this.nextUrl]);
    //     } else {
    //       this._router.navigate(['/']);
    //     }
    //   } else {
    //     this._toastService.warning('Погрешно корисничко име или лозинка!');
    //   }
    // });
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
