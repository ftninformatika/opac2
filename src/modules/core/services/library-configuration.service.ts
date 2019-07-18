import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILibraryConfigurationModel } from '../../../models/library-configuration.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryConfigurationService {

  private readonly _httpClient: HttpClient;
  public libConfigs: ILibraryConfigurationModel[] = [
    {
      libraryName: 'bgb',
      libraryFullName: 'Библиотека града Београда',
      locale: 'sr_Cyrl_RS'
    },
    {
      libraryName: 'gbns',
      libraryFullName: 'Градска библиотека Новог Сада',
      locale: 'sr_Cyrl_RS'
    },
    {
      libraryName: 'bs',
      libraryFullName: 'Библиотека шабачка',
      locale: 'sr_Cyrl_RS'
    }
  ];

  public constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  public getMockLibraryConfigs(): Observable<ILibraryConfigurationModel[]> {
    return of(this.libConfigs);
  }

}
