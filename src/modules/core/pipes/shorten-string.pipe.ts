import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenString'
})
export class ShortenStringPipe implements PipeTransform {

  public transform(value: string, size: number): string {
    if (!value || !size || size === 0 || value.length <= size) {
      return value;
    }
    return value.slice(0, size) + '...';
  }

}
