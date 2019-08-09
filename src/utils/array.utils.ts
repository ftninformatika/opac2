export class ArrayUtils {

  public static pushOrRemoveFromArr(element: any, arr: any[]) {
    if (!element || !arr) {
      return;
    }
    const index = arr.indexOf(element);
    if (index > -1) {
      arr.splice(index, 1);
    } else {
      arr.push(element);
    }
  }
}
