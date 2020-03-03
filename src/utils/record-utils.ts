import { Field, Record } from '../models/book.model';

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
    try {
      return rec.fields.find(f => f.name === sf.substring(0, 3)).subfields.find(s => s.name === sf.substring(3, 4)).content;
    } catch (e) {
      // TODO: make logger
      return null;
    }
  }

  public static getFields(rec: Record, field: string): Field[] {
    return rec.fields.filter(f => f.name === field);
  }
}
