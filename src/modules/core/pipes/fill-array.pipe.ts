import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fillArray'
})
export class FillArrayPipe implements PipeTransform {

  public transform(value: number): any {
    if (!value) {
      return;
    }
    return new Array(value).fill(1);
  }

}
