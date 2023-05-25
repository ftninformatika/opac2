import {
  ILibraryMember,
  ILoginDto,
} from '../../../models/library-member.model';
import { BookCollectionModel } from '../../../models/book-collection.model';
import { ApiEndpointConfig } from '../../../config/api-endpoint.config';
import { IMemberWrapper } from '../../../models/member-wrapper.model';
import { HttpClient } from '@angular/common/http';
import { Book, Reservation } from '../../../models/book.model';
import { BooksService } from './books.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from '../../../models/report.model';
import { ProlongLendingDTO } from '../../../models/circ/lending/lending.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly _httpClient: HttpClient;

  public constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  public login(loginDto: ILoginDto): Observable<IMemberWrapper> {
    return this._httpClient.post(
      ApiEndpointConfig.Paths.user.auth,
      loginDto
    ) as Observable<IMemberWrapper>;
  }

  public forgotPassword(email: string): Observable<boolean> {
    return this._httpClient.post(
      ApiEndpointConfig.Paths.user.forgotPassword,
      email
    ) as Observable<boolean>;
  }

  public getShelf(email: string): Observable<Book[]> {
    return this._httpClient.post(
      ApiEndpointConfig.Paths.user.getShelf,
      email
    ) as Observable<Book[]>;
  }

  public addToShelf(addToShelfDto: {
    email: string;
    bookId: string;
  }): Observable<boolean> {
    return this._httpClient.post(
      ApiEndpointConfig.Paths.user.addToShelf,
      addToShelfDto
    ) as Observable<boolean>;
  }

  public removeFromShelf(shelfDto: {
    email: string;
    bookId: string;
  }): Observable<boolean> {
    return this._httpClient.post(
      ApiEndpointConfig.Paths.user.removeFromShelf,
      shelfDto
    ) as Observable<boolean>;
  }

  public getUserByActivationToken(
    activationToken: string
  ): Observable<ILibraryMember> {
    return this._httpClient.post(
      ApiEndpointConfig.Paths.user.getMemberByActivationToken,
      activationToken
    ) as Observable<ILibraryMember>;
  }

  public activateAccount(member: ILibraryMember): Observable<boolean> {
    return this._httpClient.post(
      ApiEndpointConfig.Paths.user.activateAccount,
      member
    ) as Observable<boolean>;
  }

  public changePassword(changePassDTO: {
    newPassword: string;
    username: string;
  }) {
    return this._httpClient.post(
      ApiEndpointConfig.Paths.user.changePassword,
      changePassDTO
    ) as Observable<boolean>;
  }

  public adminCreateModifyCollection(bookCollection: BookCollectionModel) {
    return this._httpClient.post(
      ApiEndpointConfig.Paths.admin.createModifyCollection,
      bookCollection
    ) as Observable<boolean>;
  }

  public getBookCollections() {
    return this._httpClient.get(
      ApiEndpointConfig.Paths.admin.createModifyCollection
    ) as Observable<BookCollectionModel[]>;
  }

  public addRecordToCollection(addToCollectionDto: {
    collectionId: string;
    recordId: string;
  }) {
    return this._httpClient.post(
      ApiEndpointConfig.Paths.admin.addRecordToCollection,
      addToCollectionDto
    ) as Observable<boolean>;
  }

  public deleteCollectionById(collId: string): Observable<boolean> {
    return this._httpClient.delete(
      `${ApiEndpointConfig.Paths.admin.deleteCollection}/${collId}`
    ) as Observable<boolean>;
  }

  public getShowableCollections(): Observable<BookCollectionModel[]> {
    return this._httpClient.get(
      `${ApiEndpointConfig.Paths.admin.getShowableCollections}`
    ) as Observable<BookCollectionModel[]>;
  }

  public getMemberLendingHistory(memeberNo: string): Observable<Report[]> {
    return this._httpClient.get(
      `${ApiEndpointConfig.Paths.user.getLendingHistory}/${memeberNo}`
    ) as Observable<Report[]>;
  }

  public getActiveMemberLendings(memeberNo: string): Observable<Report[]> {
    return this._httpClient.get(
      `${ApiEndpointConfig.Paths.user.getActiveLendings}/${memeberNo}`
    ) as Observable<Report[]>;
  }

  /**
   *  Changes order in Admin - collections
   */
  public swapIndexes(fromIndex: number, toIndex: number): Observable<boolean> {
    return this._httpClient.get(
      `${ApiEndpointConfig.Paths.admin.swapIndexes}?i=${fromIndex}&i1=${toIndex}`
    ) as Observable<boolean>;
  }

  public prolongLending(lendingDto: {
    email: string;
    lendingId: string;
  }): Observable<ProlongLendingDTO> {
    return this._httpClient.post(
      `${ApiEndpointConfig.Paths.user.prolongLending}`,
      lendingDto
    ) as Observable<ProlongLendingDTO>;
  }

  public reserveBook(reservationRequestDto: {
    recordId: string;
    coderId: string;
    memberNo: string;
  }): Observable<any> {
    return this._httpClient.post(
      ApiEndpointConfig.Paths.user.reserveBook,
      reservationRequestDto
    ) as Observable<any>;
  }

  public getActiveReservations(memberNo: string): Observable<any> {
    return this._httpClient.get(
      `${ApiEndpointConfig.Paths.user.getActiveReservations}/${memberNo}`
    ) as Observable<any>;
  }

  public deleteReservation(
    reservationId: string,
    memberNo: string
  ): Observable<any> {
    return this._httpClient.delete(
      `${ApiEndpointConfig.Paths.user.deleteReservation}/${reservationId}/${memberNo}`
    ) as Observable<any>;
  }
}
