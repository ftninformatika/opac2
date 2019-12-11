import {Action, Selector, State, StateContext } from '@ngxs/store';

// Model -------------------------------------------------- TODO: put these where they belong
export enum ESearchResultsViewType {
  Card = 'card',
  Table = 'table'
}

export interface IAppOptionsState {
  searchResultsViewType: ESearchResultsViewType;
  selectedShareRecords: string[];
}

const InitialAppOptionsState: IAppOptionsState = {
  searchResultsViewType: ESearchResultsViewType.Card,
  selectedShareRecords: []
};

// Actions ------------------------------------------------
export class AddRemoveIdToSelectedAction {
  public static type = '[Options] Add/Remove to share selection list';
  public recordId: string;

  public constructor(recordId: string) {
    this.recordId = recordId;
  }
}

// Actions ------------------------------------------------
export class AddMultipleIdsToSelected {
  public static type = '[Options] Add/Remove to share selection list';
  public recordIds: string[];

  public constructor(recordId: string[]) {
    this.recordIds = recordId;
  }
}

export class OptionsToDefault {
  public static type = '[Options] Reset to default state';
  public constructor() {}
}

// State  -------------------------------------------------
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
    ctx.setState(state);
  }

  @Action(AddMultipleIdsToSelected)
  public addRemoveMultipleRecordIdToSelected(ctx: StateContext<IAppOptionsState>, action: AddMultipleIdsToSelected) {
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

  @Action(OptionsToDefault)
  public resetToDefault(ctx: StateContext<IAppOptionsState>, action: OptionsToDefault) {
    ctx.setState(InitialAppOptionsState);
  }
}
