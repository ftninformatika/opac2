import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { UserState } from '../states/user/user.state';
import { ConfigState } from '../states/config/config.state';

@Injectable()
export class LibraryInterceptor implements HttpInterceptor {

  private readonly _store: Store;

  public constructor(store: Store) {
    this._store = store;
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const memberLibrary = this._store.selectSnapshot(UserState.library);
    if (memberLibrary) {
      return;
    }

    const library = this._store.selectSnapshot(ConfigState.library);
    if (!library) {
      return;
    }

    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Library: library
      }
    });

    return next.handle(req);
  }

}
