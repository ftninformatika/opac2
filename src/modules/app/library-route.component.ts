import { LibraryConfigurationService } from '../core/services/library-configuration.service';
import { ILibraryConfigurationModel } from '../../models/library-configuration.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'library-route',
  template: `<router-outlet></router-outlet>`
})
export class LibraryRouteComponent implements OnInit {
  private readonly _libConfigService: LibraryConfigurationService;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _store: Store;
  private readonly _router: Router;
  public libConfigs: ILibraryConfigurationModel[];
  public paramLib = 'bgb';

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
        this.libConfigs = configs;
        if (configs.some(e => e.libraryName === paramLib)) {
          this.paramLib = paramLib;
        }
        console.log(this.paramLib);
        this._router.navigate([this.paramLib]);
      }
    );
  }
}
