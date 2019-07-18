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
      code: 'AU',
      name: 'Аутор'
    }, {
      code: 'TI',
      name: 'Наслов'
    }, {
      code: 'KW',
      name: 'Кључне речи'
    }, {
      code: 'PU',
      name: 'Издавач'
    }, {
      code: 'PY',
      name: 'Година издавања'
    }, {
      code: 'LA',
      name: 'Језик',
      coder: this.coderLanguage,
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
