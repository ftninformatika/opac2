export enum ESortType {
  SORT_AUTHOR = 'AU_sort',
  SORT_TITLE = 'TI_sort',
  SORT_YEAR = 'PY_sort',
  SORT_PUBLISHER = 'PU_sort'
}

export interface ISort {
  type: ESortType;
  ascending: boolean;
}

export const ISortInitial: ISort = {
  type: ESortType.SORT_YEAR,
  ascending: false,
};
