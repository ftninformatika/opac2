import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { ConfigState } from '../states/config/config.state';
import { UserState } from '../states/user/user.state';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Injectable()
export class LibraryInterceptor implements HttpInterceptor {

  private readonly _store: Store;

  public constructor(store: Store) {
    this._store = store;
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const memberLibrary = this._store.selectSnapshot(UserState.library);
    if (memberLibrary) {
      return next.handle(req);
    }

    const library = this._store.selectSnapshot(ConfigState.library);
    if (!library) {
      throw new Error('Global attr library is not set properly!');
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
