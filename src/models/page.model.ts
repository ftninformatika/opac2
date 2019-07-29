import { Book } from './book.model';

export interface IResultPage {
  content: Book[];
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
