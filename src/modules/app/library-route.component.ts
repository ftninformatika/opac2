import { LibraryConfigurationService } from '../core/services/library-configuration.service';
import { ILibraryConfigurationModel } from '../../models/library-configuration.model';
import { ChangeConfigAction, ConfigState } from '../core/states/config/config.state';
import { SignOutAction } from '../core/states/user/user.state';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'library-route',
  template: ``
})
export class LibraryRouteComponent implements OnInit {
  private readonly _libConfigService: LibraryConfigurationService;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _store: Store;
  private readonly _router: Router;

  public constructor(libConfigService: LibraryConfigurationService,
                     store: Store, activatedRoute: ActivatedRoute, router: Router) {
    this._libConfigService = libConfigService;
    this._activatedRoute = activatedRoute;
    this._router = router;
    this._store = store;
  }

  public ngOnInit(): void {
    const paramLib = this._activatedRoute.snapshot.paramMap.get('lib');
    this._libConfigService.getMockLibraryConfigs().subscribe(
      (configs: ILibraryConfigurationModel[]) => {
        if (configs.some(e => e.libraryName === paramLib)) {
          if (this._store.selectSnapshot(ConfigState.library) !== paramLib) {
            this._store.dispatch(SignOutAction);
            this._store.dispatch(new ChangeConfigAction(configs.find(e => e.libraryName === paramLib)));
          }
        }
        this._router.navigate(['/']);
      }
    );
  }
}
