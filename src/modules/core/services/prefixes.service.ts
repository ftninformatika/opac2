import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import { PrefixModel } from '../../../models/prefix.model';
import { PrefixUtils } from '../../../utils/prefix.utils';

@Injectable({
  providedIn: 'root',
})
export class PrefixesService {
  private prefixes;

  constructor(@Inject(LOCALE_ID) public localeId: string) {
    if (localeId === 'sr-Latn'){
      this.prefixes = PrefixUtils.Prefixes_lat;
    } else if (localeId === 'en'){
      this.prefixes = PrefixUtils.Prefixes_en;
    } else {
      this.prefixes = PrefixUtils.Prefixes;
    }
  }

  getPrefixes(): PrefixModel[] {
    return this.prefixes;
  }

  getPrefix(code: string): PrefixModel {
    return this.prefixes.find((prefix) => prefix.code === code);
  }
}
