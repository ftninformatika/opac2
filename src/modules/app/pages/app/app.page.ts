import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ELocalizationLanguage } from '../../../../config/localization-laguage.enum';
import { LibraryConfigurationService } from '../../../core/services/library-configuration.service';
import { Store } from '@ngxs/store';
import { ActivatedRoute } from '@angular/router';
import { ILibraryConfigurationModel } from '../../../../models/library-configuration.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss']
})
export class AppPage {
  private readonly _translateService: TranslateService;
  private readonly _libConfigService: LibraryConfigurationService;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _store: Store;
  public libConfigs: ILibraryConfigurationModel[];
  public paramLib: string;

  public constructor(translateService: TranslateService, libConfigService: LibraryConfigurationService,
                     store: Store, activatedRoute: ActivatedRoute) {
    this._translateService = translateService;
    this._libConfigService = libConfigService;
    this._activatedRoute = activatedRoute;
    this._store = store;
    this._translateService.addLangs([ELocalizationLanguage.SERBIAN_CYRILIC,
      ELocalizationLanguage.US_ENGLISH, ELocalizationLanguage.SERBIAN_LATIN]);
    this._translateService.setDefaultLang(ELocalizationLanguage.SERBIAN_CYRILIC);
    this.paramLib = this._activatedRoute.snapshot.paramMap.get('lib');
    console.log(this.paramLib);
  }
}
