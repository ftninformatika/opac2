import { ILibraryMember, ILoginDto } from '../../../models/library-member.model';
import { ApiEndpointConfig } from '../../../config/api-endpoint.config';
import { IMemberWrapper } from '../../../models/member-wrapper.model';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../../models/book.model';
import { BooksService } from './books.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly _booksService: BooksService;
  private readonly _httpClient: HttpClient;

  public constructor(booksService: BooksService, httpClient: HttpClient) {
    this._booksService = booksService;
    this._httpClient = httpClient;
  }

  public login(loginDto: ILoginDto): Observable<IMemberWrapper> {
    return this._httpClient.post(ApiEndpointConfig.Paths.user.auth, loginDto) as Observable<IMemberWrapper>;
  }

  public forgotPassword(email: string): Observable<boolean> {
    return this._httpClient.post(ApiEndpointConfig.Paths.user.forgotPassword, email) as Observable<boolean>;
  }

  public getShelf(email: string): Observable<Book[]> {
    return this._httpClient.post(ApiEndpointConfig.Paths.user.getShelf, email) as Observable<Book[]>;
  }

  public addToShelf(addToShelfDto: {email: string, bookId: string}): Observable<boolean> {
    return this._httpClient.post(ApiEndpointConfig.Paths.user.addToShelf, addToShelfDto) as Observable<boolean>;
  }

  public removeFromShelf(shelfDto: {email: string, bookId: string}): Observable<boolean> {
    return this._httpClient.post(ApiEndpointConfig.Paths.user.removeFromShelf, shelfDto) as Observable<boolean>;
  }

  public getUserByActivationToken(activationToken: string): Observable<ILibraryMember> {
     return this._httpClient.post(ApiEndpointConfig.Paths.user.getMemberByActivationToken, activationToken) as Observable<ILibraryMember>;
  }

  public activateAccount(member: ILibraryMember): Observable<boolean> {
    return this._httpClient.post(ApiEndpointConfig.Paths.user.activateAccount, member) as Observable<boolean>;
  }

  public changePassword(changePassDTO: {newPassword: string, username: string}) {
    return this._httpClient.post(ApiEndpointConfig.Paths.user.changePassword, changePassDTO) as Observable<boolean>;
  }
}
