import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ELocalizationLanguage } from '../../../../config/localization-laguage.enum';
import {Title} from '@angular/platform-browser';
import {Store} from '@ngxs/store';
import {ConfigState} from '../../../core/states/config/config.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss']
})
export class AppPage {
  private readonly _translateService: TranslateService;
  private readonly _store: Store;
  private readonly _titleService: Title;

  public constructor(translateService: TranslateService, titleService: Title, store: Store) {
    this._titleService = titleService;
    this._store = store;
    this._translateService = translateService;
    const title = this._store.selectSnapshot(ConfigState.fullLibName);
    this._titleService.setTitle(title);
    this._translateService.addLangs([ELocalizationLanguage.SERBIAN_CYRILIC,
      ELocalizationLanguage.US_ENGLISH, ELocalizationLanguage.SERBIAN_LATIN]);
    this._translateService.setDefaultLang(ELocalizationLanguage.SERBIAN_CYRILIC);
  }
}
