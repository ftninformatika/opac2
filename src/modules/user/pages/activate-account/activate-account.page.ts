import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../../core/services/users.service';
import { first, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'activate-acount-page',
  templateUrl: 'activate-account.page.html',
  styleUrls: ['activate-account.page.scss']
})
export class ActivateAccountPage implements OnInit {

  private readonly _activatedRoute: ActivatedRoute;
  private readonly _router: Router;
  private readonly _userService: UsersService;
  
  public constructor(activatedRoute: ActivatedRoute, router: Router, userService: UsersService) {
    this._activatedRoute = activatedRoute;
    this._router = router;
    this._userService = userService;
  }

  public ngOnInit(): void {
    // this._activatedRoute.paramMap.subscribe(
    //   activateToken => {
    //     if (activateToken) {
    //       this._userService.activateAccount().
    //     }
    //   }
    // );
    // this._activatedRoute.paramMap
    //   .pipe(
    //     withLatestFrom(this._userService.activateAccount),
    //     first()
    //   )
    //   .subscribe(
    //     ([])
    //   );
  }
}
