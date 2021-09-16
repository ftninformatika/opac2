export class DateUtils {
  public static convertUTCtoLocalTime(value: Date) {
    if (!value) {
      return null;
    }

    value = new Date(value);
    value.setTime(value.getTime() - value.getTimezoneOffset() * 60 * 1000);
    return value;
  }

  public static convertStringToDate(date: Date) {
    if (typeof date === 'string') {
      return DateUtils.parseDate(date);
    }
    return date;
  }

  private static parseDate(date: string) {
    const parts = date.split('.');
    return new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
  }
}
