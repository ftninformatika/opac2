import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../../core/services/users.service';
import * as JWT from 'jwt-decode';

@Component({
  selector: 'activate-acount-page',
  templateUrl: 'activate-account.page.html',
  styleUrls: ['activate-account.page.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivateAccountPage implements OnInit {

  private readonly _activatedRoute: ActivatedRoute;
  private readonly _router: Router;
  private readonly _userService: UsersService;
  public activationToken: string;
  
  public constructor(activatedRoute: ActivatedRoute, router: Router, userService: UsersService) {
    this._activatedRoute = activatedRoute;
    this._router = router;
    this._userService = userService;
  }

  public ngOnInit(): void {
    this.activationToken = this._activatedRoute.snapshot.paramMap.get('activationToken');

    try {
      const decodedToken = JWT(this.activationToken);
    } catch (e) {
      // TODO: inform about invalid token
      console.log(e.message);
    }
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
