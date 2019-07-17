import { Injectable } from '@angular/core';
import { Coder, Prefix } from '../../../models/prefix';

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

  prefixes: Prefix[] = [
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

  getPrefixes(): Prefix[] {
    return this.prefixes;
  }

  getPrefix(code: string): Prefix {
    return this.prefixes.find(prefix => prefix.code === code);
  }
}
