import { IResultPageSearchRequest } from '../../../models/search/result-page-options.model';
import { ApiEndpointConfig } from '../../../config/api-endpoint.config';
import { IFiltersRes } from '../../../models/search/filter.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly _httpClient: HttpClient;

  public constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  public getFilters(pageFilterRequest: IResultPageSearchRequest): Observable<IFiltersRes> {
    console.log(pageFilterRequest);
    return this._httpClient.post(ApiEndpointConfig.Paths.search.getFilters, pageFilterRequest) as Observable<IFiltersRes>;
  }

  // public getResultFilters(filters: any): Observable<any> {
  //   return of('asdsa');
  // }

}
