import { Pipe, PipeTransform } from '@angular/core';
import { Book, Primerak, RecordItem } from '../../../models/book.model';
import { RecordUtils } from '../../../utils/record-utils';

export enum ERecordFormatType {
  FORMAT_PUBLISHER_INFO = 'FORMAT_PUBLISHER_INFO',
  FORMAT_BOOK_PHYSICAL_INFO = 'FORMAT_BOOK_PHYSICAL_INFO',
  FORMAT_FIRST_SIGNATURE_INFO = 'FORMAT_FIRST_SIGNATURE_INFO',
  CONTAINS_856_URL = 'CONTAINS_856_URL'
}

@Pipe({
  name: 'recordFormat'
})
export class RecordFormatPipe implements PipeTransform {

  public transform(book: Book, type: ERecordFormatType ): any {
    if (!book || !book.record) {
      return;
    }
    switch (type) {
      case ERecordFormatType.FORMAT_PUBLISHER_INFO: {
        const pi: string[] = [];
        let putDot = false;
        if (book.publishPlace && book.publishPlace.trim() !== '') {
          pi.push(book.publishPlace);
        }
        if (book.publisher && book.publisher.trim() !== '') {
          pi.push(book.publisher);
        }
        if (book.publishYear && book.publishYear.trim() !== '') {
          pi.push(book.publishYear);
          putDot = true;
        }
        if (pi.length > 0) {
          return pi.join(', ') + (putDot ? '.' : '');
        } else {
          return null;
        }
      }
      case ERecordFormatType.FORMAT_BOOK_PHYSICAL_INFO: {
        const fi: string[] = [];
        if (book.pagesCount && book.pagesCount.trim() !== '') {
          fi.push(book.pagesCount);
        }
        if (book.dimensions && book.dimensions.trim() !== '') {
          fi.push(book.dimensions);
        }
        if (fi.length > 0) {
          return fi.join('; ');
        } else {
          return null;
        }
      }
      case ERecordFormatType.CONTAINS_856_URL: {
        const _856u = RecordUtils.getSubfieldContent(book.record, '856u');
        if (!book.record || _856u == null) {
          return null;
        }
        const urlHtml = `<a href="${_856u}" target="_blank">${_856u}</a>`;
        return urlHtml;
      }
      case ERecordFormatType.FORMAT_FIRST_SIGNATURE_INFO: {
        let fs = '';
        const items: RecordItem[] = book.items;
        if (items && items.length > 0) {
          const p: RecordItem = items.sort((p0, p1) => p0.invNum .localeCompare(p1.invNum))[0];
          fs = p.signature;
          if (fs !== '') {
            return fs;
          } else {
            return null;
          }
        }
      }
    }
  }

}
