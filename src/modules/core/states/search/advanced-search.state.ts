import { ISearchModel } from '../../../../models/search/search.model';
import { Action, State, StateContext } from '@ngxs/store';

export interface IAdvancedSearchState {
  search: ISearchModel;
}

export const InitialAdvancedSearchState: IAdvancedSearchState = {
  search: {
    branches: [],
    departments: [],
    oper1: 'AND',
    oper2: 'AND',
    oper3: 'AND',
    oper4: 'AND',
    pref1: 'AU',
    pref2: 'TI',
    pref3: 'KW',
    pref4: 'PU',
    pref5: 'PY',
    sort: '',
    text1: '',
    text2: '',
    text3: '',
    text4: '',
    text5: ''
    }
};

export class ChangeSearchParametersAction {
  static readonly type = '[Search] Change Search Parameters Action';
  public searchModel: ISearchModel;

  public constructor(searchModel1: ISearchModel) {
    this.searchModel = searchModel1;
  }
}

export class ResetSearchParametersAction {
  static readonly type = '[Search] Reset search parameters';
}

@State<IAdvancedSearchState>({
  name: 'ADVANCED_SEARCH_STATE',
  defaults: InitialAdvancedSearchState
})
export class AdvancedSearchState {


  @Action(ChangeSearchParametersAction)
  public changeSearchParamtersAction(ctx: StateContext<IAdvancedSearchState>, action: ChangeSearchParametersAction) {
    ctx.patchState(
      { search: action.searchModel}
    );
  }

  @Action(ResetSearchParametersAction)
  public resetSearchParametersAction(ctx: StateContext<IAdvancedSearchState>) {
    ctx.patchState(
      InitialAdvancedSearchState
    );
  }
}
