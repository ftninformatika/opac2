import { Book } from './book.model';

export interface IResultPage {
  content: Book[];
  page: IPage;
}

export interface IPage {
  size: number;
  number: number;
  totalElements: number;
  totalPages: number;
}
