import { Record } from '../models/book.model';

export class RecordUtils {

  public static reformatISBD(isbdInnerHtml: string): string {
    if (!isbdInnerHtml || isbdInnerHtml.trim() === ''
    || isbdInnerHtml.replace('<B>', '')
        .replace('<b>', '').replace('<BR>', '')
        .replace('<br>', '').trim() === '') {
      return null;
    }
    isbdInnerHtml = isbdInnerHtml.replace('<b>', '<strong>').replace('</b>', '</strong>')
      .replace('<B>', '<strong>').replace('</B>', '</strong>');
    return isbdInnerHtml;
  }

  public static getSubfieldContent(rec: Record, sf: string): string {
    if (!rec || !sf || !rec.fields || sf.length !== 4) {
      return null;
    }
    return rec.fields.find(f => f.name === sf.substring(0, 3)).subfields.find(s => s.name === sf.substring(3, 4)).content;
  }
}
