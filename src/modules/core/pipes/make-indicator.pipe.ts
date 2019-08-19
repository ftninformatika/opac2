import { Pipe, PipeTransform } from '@angular/core';
import { Field } from '../../../models/book.model';

@Pipe({
  name: 'makeIndicator'
})
export class MakeIndicatorPipe implements PipeTransform{

  public transform(f: Field): any {
    if (!f) {
      return;
    }
    let retVal = '';
    f.ind1 !== ' ' ? retVal += f.ind1 : retVal += '#';
    f.ind2 !== ' ' ? retVal += f.ind2 : retVal += '#';
    return retVal;
  }
}
