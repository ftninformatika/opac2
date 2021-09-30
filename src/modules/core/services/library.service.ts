import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiEndpointConfig} from "../../../config/api-endpoint.config";
import {Library, LibraryResultPage} from "../../../models/admin/library.model";

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  private readonly _httpClient: HttpClient;

  public constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  public getAll(pageNum: number, pageSize: number): Observable<LibraryResultPage> {
    return this._httpClient.get(`${ApiEndpointConfig.Paths.admin.library}?pageNumber=${pageNum}&pageSize=${pageSize}`) as Observable<LibraryResultPage>;
  }

  public create(library: Library): Observable<Library> {
    return this._httpClient.post(ApiEndpointConfig.Paths.admin.library + '/add', library) as Observable<Library>;
  }

  public edit(library: Library): Observable<Library> {
    return this._httpClient.put(ApiEndpointConfig.Paths.admin.library, library) as Observable<Library>;
  }

  public delete(libraryId: string): Observable<boolean> {
    return this._httpClient.delete(`${ApiEndpointConfig.Paths.admin.library}/${libraryId}`) as Observable<boolean>;
  }
}
