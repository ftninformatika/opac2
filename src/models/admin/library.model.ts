import {IPage} from "../page.model";

export class Library {
  _id?: string;
  prefix?: string;
  name?: string;
  address?: string;
  city?: string;
  email?: string;
  webSite?: string;
  phone?: string;
  workingHours?: string;
  latitude?: string;
  longitude?: string;
}

export class LibraryResultPage {
  content: Library[];
  page: IPage;
}

export interface ILibraryPageOptions {
  pageSize: number;
  currentPage: number;
}

export const ILibraryPageOptionsInitial: ILibraryPageOptions = {
  pageSize: 5,
  currentPage: 1
};
