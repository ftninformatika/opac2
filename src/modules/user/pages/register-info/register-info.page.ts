import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'register-info-page',
  templateUrl: 'register-info.page.html',
  styleUrls: ['register-info.page.scss']
})
export class RegisterInfoPage {

  public bgbRegister = false;

  constructor(private _router: Router) {
    if (this._router.url.indexOf('bgb') !== -1) {
      this.bgbRegister = true;
    }
  }

  // public ngOnInit() {
  //
  // }
}
