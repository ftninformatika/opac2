import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BooksService } from './books.service';
import { Book } from '../models/book';
import { EAge, EGender, IUserModel } from '../models/circ/user.model';
import { HttpClient } from '@angular/common/http';
import { ApiEndpointConfig } from '../../../config/api-endpoint.config';
import { ILibraryMember, ILoginDto } from '../models/library-member.model';
import { IMemberWrapper } from '../models/member-wrapper';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly _booksService: BooksService;
  private readonly _httpClient: HttpClient;

  user: IUserModel = {
    _id : '5ad219dee966de47694e40a2',
    educationLevel: 'Srednje',
    membershipType: {
      description: 'Gratis',
      period: 365
    },
    userCategory : {
      description: 'Studenti',
      titlesNo: 20,
      period: 15,
      maxPeriod : 30
    },
    userId: '00000004914',
    firstName: 'Петар',
    lastName: 'Макевић',
    email: 'nekimejl@asd.com',
    parentName: 'Никола',
    address: 'Николе Цоловића 33/1',
    city: 'Шабац',
    zip: '15000',
    phone: '349-130',
    jmbg: '2105993772015',
    docId: 0,
    gender: EGender.MALE,
    age: EAge.ADULT,
    signings : [
      {
        signDate : new Date('2004-12-31T11:00:00.000Z'),
        untilDate : new Date('2005-12-31T11:00:00.000Z'),
        librarian : 'demo',
        cost : 0.0,
        location : 'Dečje'
      },
      {
        signDate: new Date('2005-12-31T11:00:00.000Z'),
        untilDate: new Date('2006-12-31T11:00:00.000Z'),
        librarian: 'Lila',
        cost: 0.0,
        location: 'Dečje'
      },
      {
        signDate: new Date('2006-12-31T11:00:00.000Z'),
        untilDate: new Date('2008-01-30T11:00:00.000Z'),
        librarian: 'Lila',
        cost: 0.0,
        location: 'Dečje'
      },
      {
        signDate: new Date('2008-08-29T00:31:18.000Z'),
        untilDate: new Date('2009-08-29T00:31:18.000Z'),
        librarian: 'Dragica',
        cost: 0.0,
        location: 'Dečje'
      },
      {
        signDate: new Date('2011-08-30T11:53:41.000Z'),
        untilDate: new Date('2012-08-29T11:53:41.000Z'),
        librarian: 'dragan',
        cost: 0.0,
        location: 'Odrasli'
      },
      {
        signDate: new Date('2012-09-07T09:33:16.000Z'),
        untilDate: new Date('2013-09-07T09:33:16.000Z'),
        librarian: 'dragan',
        cost: 0.0,
        location: 'Odrasli'
      },
      {
        signDate: new Date('2013-09-16T11:12:46.000Z'),
        untilDate: new Date('2014-09-16T11:12:46.000Z'),
        librarian: 'dragan',
        cost: 0.0,
        location: 'Odrasli'
      }
    ]
  };

  public constructor(booksService: BooksService, httpClient: HttpClient) {
    this._booksService = booksService;
    this._httpClient = httpClient;
  }

  public login(loginDto: ILoginDto): Observable<IMemberWrapper> {
    return this._httpClient.post(ApiEndpointConfig.Paths.user.auth, loginDto) as Observable<IMemberWrapper>;
  }

  public forgotPassword(email: string): Observable<boolean> {
    // TODO: real implementation
    return of(true);
  }

  public getShelf(email: string): Observable<Book[]> {
    return this._booksService.getAllBooks();
  }

  public getMockUser(): Observable<IUserModel> {
    return of(this.user);
  }

  public getUserByActivationToken(activationToken: string): Observable<ILibraryMember> {
     return this._httpClient.post(ApiEndpointConfig.Paths.user.getMemberByActivationToken, activationToken) as Observable<ILibraryMember>;
  }

  public activateAccount(member: ILibraryMember): Observable<boolean> {
        return this._httpClient.post(ApiEndpointConfig.Paths.user.activateAccount, member) as Observable<boolean>;
  }
}
