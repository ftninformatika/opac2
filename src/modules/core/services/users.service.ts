import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BooksService } from './books.service';
import { Book } from '../models/book';
import { IUserModel } from '../models/circ/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private booksService: BooksService) { }

  public login(email: string, password: string): Observable<boolean> {
    // TODO: real implementation
    return of(true);
  }

  public forgotPassword(email: string): Observable<boolean> {
    // TODO: real implementation
    return of(true);
  }

  public getShelf(email: string): Observable<Book[]> {
    return this.booksService.getAllBooks();
  }
  
  public getMockUser(): Observable<IUserModel> {
    return null;
  }
}
