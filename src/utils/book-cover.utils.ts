export class BookCoverUtils {

  public static getBlankBookCover(): string {
    return `../../../../assets/book/nocover/${Math.floor(Math.random() * 4 + 1)}.jpg`;
  }
}
