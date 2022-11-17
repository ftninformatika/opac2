import { Injectable } from '@angular/core';
import { PrefixModel } from '../../../models/prefix.model';
import { PrefixUtils } from '../../../utils/prefix.utils';

@Injectable({
  providedIn: 'root',
})
export class PrefixesService {
  private prefixes = PrefixUtils.Prefixes;

  getPrefixes(): PrefixModel[] {
    return this.prefixes;
  }

  getPrefix(code: string): PrefixModel {
    return this.prefixes.find((prefix) => prefix.code === code);
  }
}
