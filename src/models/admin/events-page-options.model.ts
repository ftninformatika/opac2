import {Event} from "./event.model";

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

export interface ISort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}

export interface IPageable {
  sort: ISort;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface IEventsPageOptions {
  pageSize: number;
  currentPage: number;
  lib: string;
}

export const IResultPageOptionsInitial: IEventsPageOptions = {
  pageSize: 5,
  currentPage: 1,
  lib: null
};
