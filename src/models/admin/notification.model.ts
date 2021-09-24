import {IPageable, ISort} from "./events-page-options.model";

export class Notification {
  _id?: string;
  title?: string;
  content?: string;
}

export class NotificationResultPage {
  content: Notification[];
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

export interface INotificationPageOptions {
  pageSize: number;
  currentPage: number;
}

export const INotificationPageOptionsInitial: INotificationPageOptions = {
  pageSize: 5,
  currentPage: 1,
};
