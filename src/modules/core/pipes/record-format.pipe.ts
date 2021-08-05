import { Pipe, PipeTransform } from "@angular/core";
import { Book, Field, RecordItem } from "../../../models/book.model";
import { RecordUtils } from "../../../utils/record-utils";

export enum ERecordFormatType {
  FORMAT_PUBLISHER_INFO = "FORMAT_PUBLISHER_INFO",
  FORMAT_BOOK_PHYSICAL_INFO = "FORMAT_BOOK_PHYSICAL_INFO",
  FORMAT_FIRST_SIGNATURE_INFO = "FORMAT_FIRST_SIGNATURE_INFO",
  CONTAINS_856_URL = "CONTAINS_856_URL",
  CONTAINS_856_MIRADOR_URL = "CONTAINS_856_MIRADOR_URL",
  _324_SPECIAL = "_324_SPECIAL",
  _001C_REFERENCE = "_001C_REFERENCE",
  _327_CONTENT = "_327_CONTENT",
  _464_SOURCE_CONTENT_TITLE = "_464_SOURCE_CONTENT_TITLE",
  TOME = "TOME",
  NOTE = "NOTE",
}

@Pipe({
  name: "recordFormat",
})
export class RecordFormatPipe implements PipeTransform {
  public transform(book: Book, type: ERecordFormatType): any {
    if (!book || !book.record) {
      return;
    }
    switch (type) {
      case ERecordFormatType.FORMAT_PUBLISHER_INFO: {
        const pi: string[] = [];
        let putDot = false;
        if (book.publishPlace && book.publishPlace.trim() !== "") {
          pi.push(book.publishPlace);
        }
        if (book.publisher && book.publisher.trim() !== "") {
          pi.push(book.publisher);
        }
        if (book.publishYear && book.publishYear.trim() !== "") {
          pi.push(book.publishYear);
          putDot = true;
        }
        if (pi.length > 0) {
          return pi.join(", ") + (putDot ? "." : "");
        } else {
          return null;
        }
      }
      case ERecordFormatType.FORMAT_BOOK_PHYSICAL_INFO: {
        const fi: string[] = [];
        if (book.pagesCount && book.pagesCount.trim() !== "") {
          fi.push(book.pagesCount);
        }
        if (book.dimensions && book.dimensions.trim() !== "") {
          fi.push(book.dimensions);
        }
        if (fi.length > 0) {
          return fi.join("; ");
        } else {
          return null;
        }
      }
      case ERecordFormatType.CONTAINS_856_URL: {
        const _856u = RecordUtils.getSubfieldContent(book.record, "856u");
        if (!book.record || _856u == null) {
          return null;
        }
        const urlHtml = `<a href="${_856u}" target="_blank">линк</a>`;
        return urlHtml;
      }
      case ERecordFormatType.CONTAINS_856_MIRADOR_URL: {
        const _856d = RecordUtils.getSubfieldContent(book.record, "856d");
        return _856d;
      }
      case ERecordFormatType._324_SPECIAL: {
        const _324a = RecordUtils.getSubfieldContent(book.record, "324a");
        return _324a;
      }
      case ERecordFormatType.TOME: {
        const _200h = RecordUtils.getSubfieldContent(book.record, "200h");
        return _200h;
      }
      case ERecordFormatType.NOTE: {
        const retVal = RecordUtils.getSubfieldContent(book.record, "330a");
        return retVal;
      }
      case ERecordFormatType._001C_REFERENCE: {
        const _001c = RecordUtils.getSubfieldContent(book.record, "001c");
        let retVal = "Референце";
        if (_001c === "m") {
          retVal = "Чланак";
        } else if (_001c === "a") {
          retVal = "Извор";
        }
        return retVal;
      }
      case ERecordFormatType._327_CONTENT: {
        const _327aFields: Field[] = RecordUtils.getFields(book.record, "327");
        if (!_327aFields || _327aFields.length === 0) {
          return null;
        }
        let content = "";
        for (const f of _327aFields) {
          if (!f.subfields || f.subfields.length === 0) {
            continue;
          }
          for (const sf of f.subfields) {
            if (sf.name === "a" && sf.content && sf.content.trim() !== "") {
              content += sf.content + "; ";
            }
          }
        }
        return content;
      }
      case ERecordFormatType.FORMAT_FIRST_SIGNATURE_INFO: {
        let fs = "";
        const items: RecordItem[] = book.items;
        if (items && items.length > 0) {
          const p: RecordItem = items.sort((p0, p1) =>
            p0.invNum.localeCompare(p1.invNum)
          )[0];
          fs = p.signature;
          if (fs !== "") {
            return fs;
          } else {
            return null;
          }
        }
      }
      case ERecordFormatType._464_SOURCE_CONTENT_TITLE: {
        const _001c = RecordUtils.getSubfieldContent(book.record, '001c');
        if (!_001c) {
          return '';
        } else if (_001c === 'a') {
          return 'Извор';
        } else {
          return 'Чланак';
        }
      }
    }
  }
}
