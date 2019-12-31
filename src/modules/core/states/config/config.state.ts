import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ILibraryConfigurationModel } from '../../../../models/library-configuration.model';
import { ELocalizationLanguage } from '../../../../config/localization-laguage.enum';

export interface IConfigStateModel {
  libConfig: ILibraryConfigurationModel;
}

export const InitialConfigState: IConfigStateModel = {
  libConfig: {
    libraryName: 'gbns',
    libraryFullName: 'Градска библиотека у Новом Саду',
    shortName: 'ГБНС',
    locale: ELocalizationLanguage.SERBIAN_CYRILIC,
    navbarColor: 'bg-primary'
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

  @Selector()
  public static fullLibName(state: IConfigStateModel) {
    if (state && state.libConfig.libraryName) {
      return state.libConfig.libraryFullName;
    }
    return '--';
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
