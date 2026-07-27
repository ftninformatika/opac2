import {Event} from './event.model';
import {IPage} from '../page.model';

export class EventsResultPage {
  content: Event[];
  page: IPage;
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
