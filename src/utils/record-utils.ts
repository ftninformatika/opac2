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
}
