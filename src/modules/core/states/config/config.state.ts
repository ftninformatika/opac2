import { ILibraryConfigurationModel } from "../../../../models/library-configuration.model";
import { ELocalizationLanguage } from "../../../../config/localization-laguage.enum";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { ICoder } from "../../../../models/coders/coder.model";
import { ISelectedFilter } from "../../../../models/search/filter.model";
import { EFilterType } from "../../../search/components/search-filters/search-filters.component";
import { Injectable } from "@angular/core";

export interface IConfigStateModel {
  libConfig: ILibraryConfigurationModel;
}

export const InitialConfigState: IConfigStateModel = {
  libConfig: {
    libraryName: "gbns",
    libraryFullName: "Градска библиотека у Новом Саду",
    shortName: "ГБНС",
    locale: ELocalizationLanguage.SERBIAN_CYRILIC,
    navbarColor: "bg-primary",
  },
};

export class ChangeConfigAction {
  static readonly type = "[Config] Change Config Action";
  public libConf: ILibraryConfigurationModel;

  public constructor(libConfig: ILibraryConfigurationModel) {
    this.libConf = libConfig;
  }
}

export class SetKioskSubLocationAction {
  static readonly type = "[Config] Set Kiosk SubLocation Action";
  public kioskLocation: ICoder;
  public constructor(kioskLocation: ICoder) {
    this.kioskLocation = kioskLocation;
  }
}

export class ClearKioskSubLocationAction {
  static readonly type = "[Config] Clear Kiosk SubLocation Action";
}

// @ts-ignore
@State<IConfigStateModel>({
  name: "CONFIG_STATE",
  defaults: InitialConfigState,
})
@Injectable()
export class ConfigState {
  @Selector()
  public static library(state: IConfigStateModel) {
    if (state.libConfig && state.libConfig.libraryName) {
      return state.libConfig.libraryName;
    }
    return "bgb";
  }

  @Selector()
  public static fullLibName(state: IConfigStateModel) {
    if (state && state.libConfig.libraryName) {
      return state.libConfig.libraryFullName;
    }
    return "--";
  }

  @Selector()
  public static getKioskSubLocation(state: IConfigStateModel) {
    if (state && state.libConfig && state.libConfig.kioskSublocation) {
      return state.libConfig.kioskSublocation;
    }
    return null;
  }

  @Selector()
  public static getKioskSublocationAsFilter(state: IConfigStateModel) {
    if (state && state.libConfig && state.libConfig.kioskSublocation) {
      const kioskFilter: ISelectedFilter = {
        type: EFilterType.SUB_LOCATION,
        item: {
          label: state.libConfig.kioskSublocation.description,
          value: state.libConfig.kioskSublocation.coder_id,
          checked: true,
          count: 0,
        },
      };
      return kioskFilter;
    }
    return null;
  }

  @Action(ChangeConfigAction)
  public changeConfigAction(
    ctx: StateContext<IConfigStateModel>,
    action: ChangeConfigAction
  ): void {
    ctx.patchState({
      libConfig: action.libConf,
    });
  }

  @Action(SetKioskSubLocationAction)
  public setKioskSubLocationAction(
    ctx: StateContext<IConfigStateModel>,
    action: SetKioskSubLocationAction
  ) {
    const state: IConfigStateModel = ctx.getState();
    if (state && state.libConfig && action.kioskLocation) {
      state.libConfig.kioskSublocation = action.kioskLocation;
    }
    ctx.patchState(state);
  }

  @Action(ClearKioskSubLocationAction)
  public clearKioskSubLocation(
    ctx: StateContext<IConfigStateModel>,
    action: ClearKioskSubLocationAction
  ) {
    const state: IConfigStateModel = ctx.getState();
    if (state && state.libConfig && state.libConfig.kioskSublocation) {
      state.libConfig.kioskSublocation = null;
    }
    ctx.patchState(state);
  }
}
