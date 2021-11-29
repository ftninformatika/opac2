import {ICoder} from './coders/coder.model';

export interface ILibraryConfigurationModel {
  libraryName: string;
  libraryFullName: string;
  shortName: string;
  locale?: string;
  navbarColor?: string;
  kioskSublocation?: ICoder;
  reservation?: boolean;
}
