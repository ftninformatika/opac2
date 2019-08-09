import { ISearchModel } from './search.model';
import { IFiltersReq } from './filter.model';

export interface IResultPageOptions {
  pageSize: number;
  currentPage: number;
  filters: IFiltersReq;
  // TODO: implement later
  sort: any;
  previewType: any;
}

export interface IResultPageSearchRequest {
  searchModel?: ISearchModel;
  options: IResultPageOptions;
}

export const IResultPageOptionsInitial: IResultPageOptions = {
  pageSize: 10,
  currentPage: 1,
  filters: {
    pubTypes: [],
    pubYears: [],
    languages: [],
    authors: [],
    locations: [],
    subLocations: []
  },
  sort: null,
  previewType: null
};
