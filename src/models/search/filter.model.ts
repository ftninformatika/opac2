import { EFilterType } from '../../modules/search/components/search-filters/search-filters.component';

export interface IFiltersRes {
  locations: IFilter[];
  authors: IFilter[];
  pubTypes: IFilter[];
  languages: IFilter[];
  pubYears: IFilter[];
  subjects: IFilter[];
}

export interface IFilter {
  filter: IFilterItem;
  // For sub locations for example (bgb)
  children?: IFilterItem[];
}

export interface ISelectedFilter {
  item: IFilterItem;
  type: EFilterType;
}

export interface IFilterItem {
  label: string;
  value: string;
  checked: boolean;
  count: number;
}

export interface IFiltersReq {
  locations: ISelectedFilter[];
  subLocations: ISelectedFilter[];
  authors: ISelectedFilter[];
  pubTypes: ISelectedFilter[];
  languages: ISelectedFilter[];
  pubYears: ISelectedFilter[];
  subjects: ISelectedFilter[];
}
