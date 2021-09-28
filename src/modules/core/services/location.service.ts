import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiEndpointConfig} from "../../../config/api-endpoint.config";
import {Library, LibraryResultPage} from "../../../models/admin/library.model";
import {EventsResultPage} from "../../../models/admin/events-page-options.model";

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private readonly _httpClient: HttpClient;

  public constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  public getAll(pageNum: number, pageSize: number): Observable<LibraryResultPage> {
    return this._httpClient.get(`${ApiEndpointConfig.Paths.admin.library}?pageNumber=${pageNum}&pageSize=${pageSize}`) as Observable<LibraryResultPage>;
  }

  public create(library: Library): Observable<Library> {
    return this._httpClient.post(ApiEndpointConfig.Paths.admin.library, library) as Observable<Library>;
  }
}
