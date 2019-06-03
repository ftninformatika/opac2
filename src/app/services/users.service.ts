import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  public login(email: string, password: string): Observable<boolean> {
    // TODO: real implementation
    return of(true);
  }

  public forgotPassword(email: string): Observable<boolean> {
    // TODO: real implementation
    return of(true);
  }
}
