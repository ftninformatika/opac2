import { LibraryConfigurationService } from '../core/services/library-configuration.service';
import { ILibraryConfigurationModel } from '../../models/library-configuration.model';
import { ChangeConfigAction, ConfigState } from '../core/states/config/config.state';
import { SignOutAction } from '../core/states/user/user.state';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import {Title} from '@angular/platform-browser';
import {OptionsToDefaultAction} from '../core/states/app-options/app-options.actions';

@Component({
  selector: 'library-route',
  template: ``
})
export class LibraryRouteComponent implements OnInit {
  private readonly _libConfigService: LibraryConfigurationService;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _store: Store;
  private readonly _router: Router;
  private readonly  _titleService: Title;

  public nextUrl: string;

  public constructor(libConfigService: LibraryConfigurationService, titleService: Title,
                     store: Store, activatedRoute: ActivatedRoute, router: Router) {
    this._libConfigService = libConfigService;
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
    this._libConfigService.getMockLibraryConfigs()
      .subscribe(
      async (configs: ILibraryConfigurationModel[]) => {
        if (configs.some(e => e.libraryName === paramLib)) {
          if (this._store.selectSnapshot(ConfigState.library) !== paramLib) {
            await this._store.dispatch(SignOutAction).toPromise();
            await this._store.dispatch(OptionsToDefaultAction).toPromise();
            await this._store.dispatch(new ChangeConfigAction(configs.find(e => e.libraryName === paramLib))).toPromise();
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
