import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ILibraryConfigurationModel } from '../../../../models/library-configuration.model';
import { ELocalizationLanguage } from '../../../../config/localization-laguage.enum';

export interface IConfigStateModel {
  libConfig: ILibraryConfigurationModel;
}

export const InitialConfigState: IConfigStateModel = {
  libConfig: {
    libraryName: 'bgb',
    locale: ELocalizationLanguage.SERBIAN_CYRILIC,
    libraryFullName: 'Библиотека града Београда',
    shortName: 'БГБ'
  }
};

export class ChangeConfigAction {
  static readonly type = '[Config] Change Config Action';
  public libConf: ILibraryConfigurationModel;

  public constructor(libConfig: ILibraryConfigurationModel) {
    this.libConf = libConfig;
  }
}

@State<IConfigStateModel>({
  name: 'CONFIG_STATE',
  defaults: InitialConfigState
})
export class ConfigState {

  @Selector()
  public static library(state: IConfigStateModel) {
    if (state.libConfig && state.libConfig.libraryName) {
      return state.libConfig.libraryName;
    }
    return 'bgb';
  }

  @Action(ChangeConfigAction)
  public changeConfigAction(ctx: StateContext<IConfigStateModel>, action: ChangeConfigAction): void {
    ctx.patchState(
      {
        libConfig: action.libConf
      }
    );
  }
}
