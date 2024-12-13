import {IPageable, ISort} from "./events-page-options.model";

export class Faq {
  _id?: string;
  question?: string;
  answer?: string;
  index?: number;
}

export class FAQResultPage {
  content: Faq[];
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

export interface IFAQPageOptions {
  pageSize: number;
  currentPage: number;
}

export const IFAQPageOptionsInitial: IFAQPageOptions = {
  pageSize: 5,
  currentPage: 1,
};
