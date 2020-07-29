import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILibraryConfigurationModel } from '../../../models/library-configuration.model';
import { Observable, of } from 'rxjs';
import {ApiEndpointConfig} from '../../../config/api-endpoint.config';

@Injectable({
  providedIn: 'root'
})
export class LibraryConfigurationService {

  private readonly _httpClient: HttpClient;

  public constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  public getAllBriefConfigs(): Observable<ILibraryConfigurationModel[]> {
    return this._httpClient.get(ApiEndpointConfig.Paths.config.getAll) as Observable<ILibraryConfigurationModel[]>;
  }


}
