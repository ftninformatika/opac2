import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ISelectedFilter } from '../../../../models/search/filter.model';
import {
  AddMultipleIdsToSelectedAction,
  AddRemoveIdToSelectedAction,
  AddRemoveLocationsAction, AddRemoveSubLocationsAction,
  ClearLocationFiltersAction, OptionsToDefaultAction
} from './app-options.actions';

// Model -------------------------------------------------- TODO: put these where they belong
export enum ESearchResultsViewType {
  Card = 'card',
  Table = 'table'
}

export interface IAppOptionsState {
  searchResultsViewType: ESearchResultsViewType;
  selectedShareRecords: string[];
  selectedLocations: ISelectedFilter[];
  selectedSubLocations: ISelectedFilter[];
}

const InitialAppOptionsState: IAppOptionsState = {
  searchResultsViewType: ESearchResultsViewType.Card,
  selectedShareRecords: [],
  selectedLocations: [],
  selectedSubLocations: []
};

// State  -------------------------------------------------
// @ts-ignore
@State<IAppOptionsState>({
  name: 'APP_OPTIONS_STATE',
  defaults: InitialAppOptionsState
})
export class AppOptionsState {

  @Selector()
  public static getShareSelectionRecords(state: IAppOptionsState): string[] {
    if (!state || !state.selectedShareRecords || state.selectedShareRecords.length === 0) {
      return null;
    }
    return state.selectedShareRecords;
  }

  @Selector()
  public static getSelectedLocationFilters(state: IAppOptionsState): ISelectedFilter[] {
    if (!state || !state.selectedLocations || state.selectedLocations.length === 0) {
      return [];
    }
    return state.selectedLocations;
  }

  @Selector()
  public static getSelectedSubLocationFilters(state: IAppOptionsState): ISelectedFilter[] {
    if (!state || !state.selectedSubLocations || state.selectedSubLocations.length === 0) {
      return [];
    }
    return state.selectedSubLocations;
  }

  @Action(AddRemoveIdToSelectedAction)
  public addRemoveRecordIdToSelected(ctx: StateContext<IAppOptionsState>, action: AddRemoveIdToSelectedAction) {
    const state = ctx.getState();
    if (!action || !action.recordId) {
      return;
    }
    const index = state.selectedShareRecords.indexOf(action.recordId);
    if (index === -1) {
      state.selectedShareRecords.push(action.recordId);
    } else {
      state.selectedShareRecords.splice(index, 1);
    }
    ctx.patchState(state);
  }

  @Action(AddMultipleIdsToSelectedAction)
  public addRemoveMultipleRecordIdToSelected(ctx: StateContext<IAppOptionsState>, action: AddMultipleIdsToSelectedAction) {
    const state = ctx.getState();
    if (!action || !action.recordIds || action.recordIds.length === 0) {
      return;
    }
    for (const recordId of action.recordIds) {
      const index = state.selectedShareRecords.indexOf(recordId);
      if (index === -1) {
        state.selectedShareRecords.push(recordId);
      }
    }
    ctx.setState(state);
  }

  @Action(ClearLocationFiltersAction)
  public clearLocationFilterActions(ctx: StateContext<IAppOptionsState>) {
    ctx.patchState({selectedSubLocations: [], selectedLocations: []});
  }

  @Action(AddRemoveLocationsAction)
  public addRemoveLocationsAction(ctx: StateContext<IAppOptionsState>, action: AddRemoveLocationsAction) {
    const state = ctx.getState();
    if (!action || !action.locationFilter) {
      return;
    }
    const index = state.selectedLocations.indexOf(action.locationFilter);
    if (index === -1) {
        state.selectedLocations.push(action.locationFilter);
    } else {
      state.selectedLocations.splice(index, 1);
    }
    ctx.setState(state);
  }

  @Action(AddRemoveSubLocationsAction)
  public addRemoveSubLocationsAction(ctx: StateContext<IAppOptionsState>, action: AddRemoveSubLocationsAction) {
    const state = ctx.getState();
    if (!action || !action.subLocationFilter) {
      return;
    }
    const index = state.selectedSubLocations.indexOf(action.subLocationFilter);
    if (index === -1) {
      state.selectedSubLocations.push(action.subLocationFilter);
    } else {
      state.selectedSubLocations.splice(index, 1);
    }
    ctx.setState(state);
  }

  @Action(OptionsToDefaultAction)
  public resetToDefault(ctx: StateContext<IAppOptionsState>, action: OptionsToDefaultAction) {
    ctx.setState({...InitialAppOptionsState});
  }
}
