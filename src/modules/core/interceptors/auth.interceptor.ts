import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { UserState } from '../states/user/user.state';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private readonly _store: Store;

  public constructor(store: Store) {
    this._store = store;
  }
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = this._store.selectSnapshot(UserState.token);
    if (token != null) {
      req = req.clone({
        setHeaders: {Authorization: `Bearer ${token}`}
      });
    }
    return next.handle(req);
  }

}