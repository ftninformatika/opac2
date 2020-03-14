import { ChangeConfigAction, ConfigState, SetKioskSubLocationAction } from '../core/states/config/config.state';
import { LibraryConfigurationService } from '../core/services/library-configuration.service';
import { OptionsToDefaultAction } from '../core/states/app-options/app-options.actions';
import { ILibraryConfigurationModel } from '../../models/library-configuration.model';
import { SignOutAction } from '../core/states/user/user.state';
import { CodersService } from '../core/services/coders.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ICoder } from '../../models/coders/coder.model';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { Store } from '@ngxs/store';

@Component({
  selector: 'library-route',
  template: ``
})
export class LibraryRouteComponent implements OnInit {
  private readonly _libConfigService: LibraryConfigurationService;
  private readonly _codersService: CodersService;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly  _titleService: Title;
  private readonly _store: Store;
  private readonly _router: Router;

  public nextUrl: string;

  public constructor(libConfigService: LibraryConfigurationService, titleService: Title,
                     store: Store, activatedRoute: ActivatedRoute, router: Router, codersService: CodersService) {
    this._libConfigService = libConfigService;
    this._codersService = codersService;
    this._titleService = titleService;
    this._activatedRoute = activatedRoute;
    this._router = router;
    this._store = store;
  }

  public ngOnInit(): void {
    this._activatedRoute.paramMap
      .pipe(
      map(() => window.history.state.proceedUrl),
      take(1)
    ).subscribe(
      nexUrl => {
        if (nexUrl) {
        this.nextUrl = nexUrl;
        }
        this.changeLibConfig();
      },
      () => this.changeLibConfig()
    );
  }

  private changeLibConfig() {
    const paramLib = this._activatedRoute.snapshot.paramMap.get('lib');
    const paramKioskLocation = this._activatedRoute.snapshot.paramMap.get('kioskLocation');
    const currentKioskCoder: ICoder = this._store.selectSnapshot(ConfigState.getKioskSubLocation);
    this._libConfigService.getMockLibraryConfigs()
      .subscribe(
      async (configs: ILibraryConfigurationModel[]) => {
        if (configs.some(e => e.libraryName === paramLib)) {
          if (this._store.selectSnapshot(ConfigState.library) !== paramLib ||
            (currentKioskCoder && currentKioskCoder.coder_id !== paramKioskLocation) || (!currentKioskCoder && paramKioskLocation)) {
            await this._store.dispatch(SignOutAction).toPromise();
            await this._store.dispatch(OptionsToDefaultAction).toPromise();
            await this._store.dispatch(new ChangeConfigAction(configs.find(e => e.libraryName === paramLib))).toPromise();
            if (paramKioskLocation) {
              const kioskCoder: ICoder = await this._codersService.getSubLocationCoder(paramKioskLocation, paramLib).toPromise();
              if (kioskCoder) {
                await this._store.dispatch(new SetKioskSubLocationAction(kioskCoder));
              }
            }
            await this._store.dispatch(OptionsToDefaultAction);
            const title = this._store.selectSnapshot(ConfigState.fullLibName);
            this._titleService.setTitle(title);
          }
        }
        if (this.nextUrl) {
          await this._router.navigateByUrl(`/${this.nextUrl}`);
        } else {
          await this._router.navigate(['/']);
        }
      }
    );
  }

}
