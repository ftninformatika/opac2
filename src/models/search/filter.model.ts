export interface IFiltersRes {
  locations: IFilter[];
  authors: IFilter[];
  pubTypes: IFilter[];
  languages: IFilter[];
  pubYears: IFilter[];
}

export interface IFilter {
  filter: IFilterItem;
  // For sub locations for example (bgb)
  children?: IFilterItem[];
}

export interface IFilterItem {
  label: string;
  value: string;
  checked: boolean;
  count: number;
}

export interface IFiltersReq {
  locations: string[];
  subLocations: string[];
  authors: string[];
  pubTypes: string[];
  languages: string[];
  pubYears: string[];
}
