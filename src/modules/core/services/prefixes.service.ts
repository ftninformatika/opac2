import { Injectable } from '@angular/core';
import { Coder, PrefixModel } from '../../../models/prefix.model';

@Injectable({
  providedIn: 'root'
})
export class PrefixesService {

  coderLanguage: Coder[] = [
    {
      code: 'srp',
      name: 'srpski',
    }, {
      code: 'eng',
      name: 'engleski',
    }
  ];

  prefixes: PrefixModel[] = [
    {
      code: 'DT',
      name: 'Врста грађе' // coder
    },
    {
      code: 'AU',
      name: 'Аутор'
    },
    {
      code: 'TI',
      name: 'Наслов'
    },
    {
      code: 'KW',
      name: 'Кључне речи'
    },
    {
      code: 'PU',
      name: 'Издавач'
    },
    {
      code: 'PY',
      name: 'Година издавања'
    },
    {
      code: 'PP',
      name: 'Место издавања'
    },
    {
      code: 'LA',
      name: 'Језик',
      coder: this.coderLanguage,
    },
    {
      code: 'CO',
      name: 'Држава издавања' // coder
    },
    {
      code: 'IN',
      name: 'Инвентарни број'
    },
    {
      code: 'DC',
      name: 'UDK'
    },
    {
      code: 'BN',
      name: 'ISBN'
    },
    {
      code: 'SP',
      name: 'ISSN'
    },
    {
      code: 'RN',
      name: 'Број записа'
    },
    {
      code: 'CC',
      name: 'Код за врсту садржаја' // coder
    },
    {
      code: 'RT',
      name: 'Код за врсту записа' // coder
    },
    {
      code: 'SB',
      name: 'Предметна одредница'
    },
    {
      code: 'SD',
      name: 'Предметна пододредница'
    }
  ];

  constructor() { }

  getPrefixes(): PrefixModel[] {
    return this.prefixes;
  }

  getPrefix(code: string): PrefixModel {
    return this.prefixes.find(prefix => prefix.code === code);
  }
}
