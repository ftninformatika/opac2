import { ISearchModel } from './search.model';
import { IFiltersReq } from './filter.model';
import { ISort, ISortInitial } from './sort.model';

export interface IResultPageOptions {
  pageSize: number;
  currentPage: number;
  filters: IFiltersReq;
  sort: ISort;
  previewType: any;
  lib: string;
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
  sort: {...ISortInitial},
  previewType: null,
  lib: null
};
