import { Book } from './book.model';

export interface IResultPage {
  content: Book[];
  total: number;
  totalPages: number;
  last: boolean;
  first: boolean;
  numberOfElements: number;
  size: number;
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
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}
