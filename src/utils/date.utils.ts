export class DateUtils {
  public static convertUTCtoLocalTime(value: Date) {
    if (!value) {
      return null;
    }

    value = new Date(value);
    value.setTime(value.getTime() - value.getTimezoneOffset() * 60 * 1000);
    return value;
  }

  public static convertStringToDate(date: any, time?: string) {
    if (typeof date === 'string') {
      return DateUtils.parseDate(date, time);
    }
    if (time) {
      return new Date(date.setHours(Number(time.split(":")[0]), Number(time.split(":")[1])));
    }
    return date;
  }

  private static parseDate(date: string, time: string) {
    const dateParts = date.split('.');
    if (time) {
      const timeParts = time.split(":");
      return new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]), Number(timeParts[0]),
        Number(timeParts[1]));
    }
    return new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));  // when we filter events, date from is only by date
  }
}
