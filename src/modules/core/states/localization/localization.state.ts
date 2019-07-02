import { ELocalizationLanguage } from '../../../../config/localization-laguage.enum';
import { Action, Selector, State, StateContext } from '@ngxs/store';

export class ILocalizationState {
  lang: ELocalizationLanguage;
}

export const DefaultLocalizationState: ILocalizationState = {
  lang: ELocalizationLanguage.SERBIAN_CYRILIC
};

export class ChangeLanguageAction {
  public static readonly type = '[Language] Change Language';
  public lang: ELocalizationLanguage;
  public constructor(lang: ELocalizationLanguage) {
    this.lang = lang;
  }
}

@State({
  name: 'LOCALIZATION_STATE',
  defaults: DefaultLocalizationState
})
export class LocalizationState {

  public constructor() {}

  @Selector()
  public static currLang(state: ILocalizationState): string {
    return state.lang;
  }

  @Action(ChangeLanguageAction)
  public changeLanguage(ctx: StateContext<ILocalizationState>, action: ChangeLanguageAction): void {
    if (!Object.values(ELocalizationLanguage).includes(action.lang)) {
      ctx.patchState(DefaultLocalizationState);
    } else {
      ctx.patchState({lang: action.lang});
    }
    console.log(ctx.getState());
  }
}
