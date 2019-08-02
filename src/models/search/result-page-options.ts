export interface IResultPageOptions {
  pageSize: number;
  currentPage: number;
  // TODO: implement later
  filters: any[];
  sort: any;
  previewType: any;
}

export const IResultPageOptionsInitial: IResultPageOptions = {
  pageSize: 10,
  currentPage: 1,
  filters: null,
  sort: null,
  previewType: null
};
