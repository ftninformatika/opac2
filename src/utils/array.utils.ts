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

  public static updateArray(editedItem, array) {
    const idx: number = array.findIndex(item => item._id === editedItem._id);
    let newArray = [...array];
    newArray[idx] = editedItem;
    return newArray;
  }


  public static deleteItemFromArray(deletedItem, array) {
    const idx: number = array.findIndex(item => item._id === deletedItem._id);
    if (idx !== -1) {
      array.splice(idx, 1);
      array = [...array]
    }
    return array;
  }
}
