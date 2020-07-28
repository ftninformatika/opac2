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
      shortName: 'БГБ',
      locale: 'sr_Cyrl_RS',
      navbarColor: 'bg-primary'
    },
    {
      libraryName: 'gbns',
      libraryFullName: 'Градска библиотека у Новом Саду',
      shortName: 'ГБНС',
      locale: 'sr_Cyrl_RS',
      navbarColor: 'bg-primary'
    },
    {
      libraryName: 'bs',
      libraryFullName: 'Библиотека шабачка',
      shortName: 'БШ',
      locale: 'sr_Cyrl_RS',
      navbarColor: 'green'
    },
    {
      libraryName: 'msk',
      libraryFullName: 'Епархија Сремски Карловци',
      shortName: 'ЕСК',
      locale: 'sr_Cyrl_RS',
      navbarColor: 'green'
    },
    {
      libraryName: 'bmb',
      libraryFullName: 'Библиотека Милутин Бојић',
      shortName: 'БМБ',
      locale: 'sr_Cyrl_RS',
      navbarColor: 'green'
    }
    ,
    {
      libraryName: 'bmg',
      libraryFullName: 'Библиотека Милован Глишић',
      shortName: 'БМГ',
      locale: 'sr_Cyrl_RS',
      navbarColor: 'green'
    }
    ,
    {
      libraryName: 'bpk',
      libraryFullName: 'Библиотека Политика Крупањ',
      shortName: 'БМГ',
      locale: 'sr_Cyrl_RS',
      navbarColor: 'green'
    }
    ,
    {
      libraryName: 'bvzl',
      libraryFullName: 'Библиотека Вуковог Завичаја',
      shortName: 'БВЗЛ',
      locale: 'sr_Cyrl_RS',
      navbarColor: 'green'
    }
    ,
    {
      libraryName: 'bdtl',
      libraryFullName: 'Библиотека Димитрије Туцовић',
      shortName: 'БДТЛ',
      locale: 'sr_Cyrl_RS',
      navbarColor: 'green'
    }
    ,
    {
      libraryName: 'bvao',
      libraryFullName: 'Библиотека Влада Аксентијевић',
      shortName: 'БВАО',
      locale: 'sr_Cyrl_RS',
      navbarColor: 'green'
    }
  ];

  public constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  public getMockLibraryConfigs(): Observable<ILibraryConfigurationModel[]> {
    return of(this.libConfigs);
  }

}
