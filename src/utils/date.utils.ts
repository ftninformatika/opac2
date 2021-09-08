export class DateUtils {
  public static convertUTCtoLocalTime(value: Date) {
    if (!value) {
      return null;
    }

    value = new Date(value);
    value.setTime(value.getTime() - value.getTimezoneOffset() * 60 * 1000);
    return value;
  }
}
