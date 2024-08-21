import {IPage} from '../page.model';


export class Notification {
  _id?: string;
  title?: string;
  content?: string;
  type?: string;
  sender?: string;
  sentDate?: Date;
}

export class NotificationResultPage {
  content: Notification[];
  page: IPage;
}

export interface INotificationPageOptions {
  pageSize: number;
  currentPage: number;
}

export const INotificationPageOptionsInitial: INotificationPageOptions = {
  pageSize: 5,
  currentPage: 1,
};
