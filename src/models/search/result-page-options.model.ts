import { ISearchModel } from './search.model';
import { IFilters } from '../filter.model';

export interface IResultPageOptions {
  pageSize: number;
  currentPage: number;
  filters: IFilters[];
  // TODO: implement later
  sort: any;
  previewType: any;
}

export interface IResultPageFilterRequest {
  searchModel?: ISearchModel;
  options: IResultPageOptions;
}


export const IResultPageOptionsInitial: IResultPageOptions = {
  pageSize: 10,
  currentPage: 1,
  filters: null,
  sort: null,
  previewType: null
};
