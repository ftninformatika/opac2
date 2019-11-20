import { Pipe, PipeTransform } from '@angular/core';
import { Book, Primerak } from '../../../models/book.model';

export enum ERecordFormatType {
  FORMAT_PUBLISHER_INFO = 'FORMAT_PUBLISHER_INFO',
  FORMAT_BOOK_PHYSICAL_INFO = 'FORMAT_BOOK_PHYSICAL_INFO',
  FORMAT_FIRST_SIGNATURE_INFO = 'FORMAT_FIRST_SIGNATURE_INFO'
}

@Pipe({
  name: 'recordFormat'
})
export class RecordFormatPipe implements PipeTransform{

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
      case ERecordFormatType.FORMAT_FIRST_SIGNATURE_INFO: {
        let fs = '';
        const pr: Primerak[] = book.record.primerci;
        if (pr && pr.length > 0) {
          const p: Primerak = pr.sort((p0, p1) => p0.invBroj.localeCompare(p1.invBroj))[0];
          if (p.sigIntOznaka && p.sigIntOznaka.trim() !== '') {
            fs += p.sigIntOznaka;
          }
          if (p.sigNumerusCurens && p.sigNumerusCurens.trim() !== '') {
            fs += fs === '' ? '' : '-';
            fs += p.sigNumerusCurens;
          }
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
