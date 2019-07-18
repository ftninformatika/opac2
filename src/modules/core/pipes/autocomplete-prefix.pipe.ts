import { Pipe, PipeTransform } from '@angular/core';
import { EAutoCompletePrefixes } from '../../../models/prefix-value';

@Pipe({
  name: 'autocomplete-i18n'
})
export class AutocompletePrefixPipe implements PipeTransform {

  public transform(value: string, arg: any): string {
    switch (value) {
      case EAutoCompletePrefixes.AUTHORS: return 'аутор';
      case EAutoCompletePrefixes.KEYWORDS: return 'кљ. реч';
      case EAutoCompletePrefixes.TITLES: return 'наслов';
      case EAutoCompletePrefixes.PUBLISHERS: return 'издавач';
    }
    return 'непознато';
  }
}
