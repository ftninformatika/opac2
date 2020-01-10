import {ISelectedFilter} from '../../../../models/search/filter.model';

export class AddRemoveIdToSelectedAction {
  public static type = '[Options] Add/Remove to share selection list';
  public recordId: string;

  public constructor(recordId: string) {
    this.recordId = recordId;
  }
}

export class AddMultipleIdsToSelectedAction {
  public static type = '[Options] Add/Remove to share selection list';
  public recordIds: string[];

  public constructor(recordId: string[]) {
    this.recordIds = recordId;
  }
}

export class OptionsToDefaultAction {
  public static type = '[Options] Reset to default state';
  public constructor() {}
}

export class ClearLocationFiltersAction {
  public static type = '[Options] Clear Location and SubLocation filters';
  public constructor() {}
}

export class AddRemoveLocationsAction {
  public static type = '[Options] Add/Remove Location filters';
  public locationFilter: ISelectedFilter;

  public constructor(locationFilters: ISelectedFilter) {
    this.locationFilter = locationFilters;
  }
}

export class AddRemoveSubLocationsAction {
  public static type = '[Options] Add/Remove SubLocation filters';
  public subLocationFilter: ISelectedFilter;

  public constructor(subLocationFilters: ISelectedFilter) {
    this.subLocationFilter = subLocationFilters;
  }
}
