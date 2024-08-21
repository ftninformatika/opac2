import {IPage} from '../page.model';

export class Faq {
  _id?: string;
  question?: string;
  answer?: string;
  index?: number;
}

export class FAQResultPage {
  content: Faq[];
  page: IPage;
}

export interface IFAQPageOptions {
  pageSize: number;
  currentPage: number;
}

export const IFAQPageOptionsInitial: IFAQPageOptions = {
  pageSize: 5,
  currentPage: 1,
};
