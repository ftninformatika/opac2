import { ISelectedFilter } from '../models/search/filter.model';

export class ArrayUtils {

  public static pushOrRemoveFromArrSelFilters(element: ISelectedFilter, arr: ISelectedFilter[]) {
    if (!element || !arr) {
      return;
    }
    let index = -1;
    const e = arr.find(f => f.item.value === element.item.value);
    if (e) {
      index = arr.indexOf(e);
    }
    if (index > -1) {
      arr.splice(index, 1);
    } else {
      arr.push(element);
    }
  }
}
