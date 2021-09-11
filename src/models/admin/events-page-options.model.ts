import {Event, EventFilter} from "./event.model";

export enum ESortType {
  SORT_TITLE = 'TI_sort',
  SORT_CONTENT = 'CO_sort',
  SORT_DATE = 'DATE_sort',
  SORT_NONE = ''
}

export interface ISort {
  type: ESortType;
  ascending: boolean;
}

export const ISortInitial: ISort = {
  type: ESortType.SORT_NONE,
  ascending: false,
};

export interface IEventsPageOptions {
  pageSize: number;
  currentPage: number;
  filters: EventFilter;
  sort: ISort;
  lib: string;
}

export const IResultPageOptionsInitial: IEventsPageOptions = {
  pageSize: 5,
  currentPage: 1,
  filters: {
    from: null,
    to: null,
    searchText: ''
  },
  sort: {...ISortInitial},
  lib: null
};


// page.model.ts

export class EventsResultPage {
  content: Event[];
  totalElements: number;
  totalPages: number;
  last: boolean;
  first: boolean;
  numberOfElements: number;
  size: number;
  number: number;
  empty: boolean;
  sort: ISort;
  pageable: IPageable;
}

export interface ISort2 {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}

export interface IPageable {
  sort: ISort2;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}
