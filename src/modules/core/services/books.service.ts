import { IResultPageSearchRequest } from '../../../models/search/result-page-options.model';
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

  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  public search(searchRequest: IResultPageSearchRequest, pageNumber: number = 0, pageSize: number = 10): Observable<IResultPage> {
    return this._httpClient
      .post
      (`${ApiEndpointConfig.Paths.search.main}?pageNumber=${pageNumber}&pageSize=${pageSize}`, searchRequest) as Observable<IResultPage>;
  }

  public searchByIds(searchRequest: IResultPageSearchRequest, pageNumber: number = 0, pageSize: number = 10): Observable<IResultPage> {
    return this._httpClient
      .post
      (`${ApiEndpointConfig.Paths.search.byIds}?pageNumber=${pageNumber}&pageSize=${pageSize}`, searchRequest) as Observable<IResultPage>;
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
