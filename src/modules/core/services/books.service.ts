import { IResultPageSearchRequest } from '../../../models/search/result-page-options.model';
import { ILendingViewModel } from '../../../models/circ/lending/lending-view.model';
import { ApiEndpointConfig } from '../../../config/api-endpoint.config';
import { IPrefixValue } from '../../../models/prefix-value.model';
import { IResultPage } from '../../../models/page.model';
import { AvgRecordRating, Book, BookCommon, RecordRating } from '../../../models/book.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private readonly _httpClient: HttpClient;

  lendings: ILendingViewModel[] = [
    {
      userId: '00000004914',
      ctlgNo: '01000035987',
      location: 'Odrasli',
      lendDate: new Date(''),
      returnDate: new Date(),
      title: 'Tri praseta',
      published: 'Laguna, 2011'
    },
    {
      userId: '00000004914',
      ctlgNo: '01000035987',
      location: 'Odrasli',
      lendDate: new Date(''),
      returnDate: new Date(),
      title: 'Tri praseta',
      published: 'Laguna, 2011'
    },
    {
      userId: '00000004914',
      ctlgNo: '01000035987',
      location: 'Odrasli',
      lendDate: new Date(''),
      returnDate: new Date(),
      title: 'Tri praseta',
      published: 'Laguna, 2011'
    },
    {
      userId: '00000004914',
      ctlgNo: '01000035987',
      location: 'Odrasli',
      lendDate: new Date(''),
      returnDate: new Date(),
      title: 'Tri praseta',
      published: 'Laguna, 2011'
    },
    {
      userId: '00000004914',
      ctlgNo: '01000035987',
      location: 'Odrasli',
      lendDate: new Date(''),
      returnDate: new Date(),
      title: 'Tri praseta',
      published: 'Laguna, 2011'
    },
    {
      userId: '00000004914',
      ctlgNo: '01000035987',
      location: 'Odrasli',
      lendDate: new Date(''),
      returnDate: new Date(),
      title: 'Tri praseta',
      published: 'Laguna, 2011'
    },
    {
      userId: '00000004914',
      ctlgNo: '01000035987',
      location: 'Odrasli',
      lendDate: new Date(''),
      returnDate: new Date(),
      title: 'Tri praseta',
      published: 'Laguna, 2011'
    }
  ];


  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }


  public getDummyLendingViews(): ILendingViewModel[] {
    return this.lendings;
  }
  // -----------------------------------------------

  public search(searchRequest: IResultPageSearchRequest, pageNumber: number = 0, pageSize: number = 10): Observable<IResultPage> {
    return this._httpClient
      .post
      (`${ApiEndpointConfig.Paths.search.main}?pageNumber=${pageNumber}&pageSize=${pageSize}`, searchRequest) as Observable<IResultPage>;
  }

  public autocomplete(query: string): Observable<IPrefixValue[]> {
    return this._httpClient.post(ApiEndpointConfig.Paths.search.autocomplete, query) as Observable<IPrefixValue[]>;
  }

  public getBook(_id: string): Observable<Book> {
    return this._httpClient.post(ApiEndpointConfig.Paths.book.main, _id) as Observable<Book>;
  }

  public getMultipleBooks(recordsIds: string[]): Observable<Book[]> {
    return this._httpClient.post(ApiEndpointConfig.Paths.book.getMultiple, recordsIds) as Observable<Book[]>;
  }

  public getBooksByCollId(collId: string): Observable<Book[]> {
    return this._httpClient.post(ApiEndpointConfig.Paths.book.getByCollectionId, collId) as Observable<Book[]>;
  }

  public createModifyBookCommon(bookCommon: BookCommon): Observable<BookCommon> {
    return this._httpClient.post(ApiEndpointConfig.Paths.bookCommon.main, bookCommon) as Observable<BookCommon>;
  }

  public uploadBookCover(uid: BigInteger, file: File): Observable<boolean> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this._httpClient.post(`${ApiEndpointConfig.Paths.bookCover.upload}/${uid}`, formData) as Observable<boolean>;
  }

  public rateRecord(recordRating: RecordRating, recordId: string): Observable<AvgRecordRating> {
    return this._httpClient.post(`${ApiEndpointConfig.Paths.book.rateRecord}/${recordId}`, recordRating) as Observable<AvgRecordRating>;
  }
}
