import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../core/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  nextUrl: string;

  constructor(private formBuilder: FormBuilder,
              private usersService: UsersService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.nextUrl = params.get('next');
    });
  }

  login(): void {
    const email = this.loginForm.value.email.trim();
    const password = this.loginForm.value.password.trim();
    this.usersService.login(email, password).subscribe(data => {
      if (data) {
        if (this.nextUrl) {
          this.router.navigate([this.nextUrl]);
        } else {
          this.router.navigate(['/']);
        }
      } else {
        // TODO: message "email+password is invalid"
      }
    });
  }

  forgotPassword(): void {
    const email = this.loginForm.value.email.trim();
    this.usersService.forgotPassword(email).subscribe(data => {
      if (data) {
        // TODO: message "email sent"
        console.log('forgot password: true');
      } else {
        // TODO: message "email unknown"
        console.log('forgot password: false');
      }
    });
  }

}
