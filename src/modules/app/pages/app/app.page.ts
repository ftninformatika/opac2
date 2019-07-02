import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ELocalizationLanguage } from '../../../../config/localization-laguage.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss']
})
export class AppPage {
  private readonly _translateService: TranslateService;

  public constructor(translateService: TranslateService) {
    this._translateService = translateService;
    this._translateService.addLangs([ELocalizationLanguage.SERBIAN_CYRILIC,
      ELocalizationLanguage.US_ENGLISH, ELocalizationLanguage.SERBIAN_LATIN]);
    this._translateService.setDefaultLang(ELocalizationLanguage.SERBIAN_CYRILIC);
  }
}
