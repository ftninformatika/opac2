import { Selector, State } from '@ngxs/store';

export interface IConfigStateModel {
  library: string;
}

export const InitialConfigState: IConfigStateModel = {
  library: 'bgb'
};

export class ChangeConfigAction {
  static readonly type = '[Config] Change Config Action';
  public library: string;

  public constructor(library: string) {
    this.library = library;
  }
}

@State<IConfigStateModel>({
  name: 'CONFIG_STATE',
  defaults: InitialConfigState
})
export class ConfigState {

  @Selector()
  public static library(state: IConfigStateModel) { return state.library; }
// TODO: add other config parameters and implement state actions
}
