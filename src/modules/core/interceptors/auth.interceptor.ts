import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { Store } from '@ngxs/store';
import {SignOutAction, UserState} from '../states/user/user.state';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private readonly _store: Store;
  private readonly _router: Router;

  public constructor(store: Store, router: Router) {
    this._store = store;
    this._router = router;
  }
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = this._store.selectSnapshot(UserState.token);
    const memberLibrary: string = this._store.selectSnapshot(UserState.library);
    if (token != null) {
      req = req.clone({
        setHeaders: {
          // 'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          Library: memberLibrary
        }
      });
    }
    return next.handle(req).pipe(
      catchError(
        (err, caught) => {
          if (err.status === 401) {
            this._store.dispatch(new SignOutAction());
            this._router.navigate(['/user/login']);
            return of(err);
          }
          throw err;
        }
      )
    );
  }

}
