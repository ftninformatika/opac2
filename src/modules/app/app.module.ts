import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LibraryRouteComponent } from './library-route.component';
import { ConfigState } from '../core/states/config/config.state';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { environment } from '../../environments/environment';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { CommonUiModule } from '../shared/common-ui.module';
import { UserState } from '../core/states/user/user.state';
import { LazyLoadImageDirective } from 'ng-lazyload-image';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClient } from '@angular/common/http';
import { CoreModule } from '../core/core.module';
import { AppPage } from './pages/app/app.page';
import { NgxsModule } from '@ngxs/store';
import { MetaModule } from '@ngx-meta/core';
import { FacebookModule } from 'ngx-facebook';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BackToTopButton } from './components/back-to-top.directive';
import { AppOptionsState } from '../core/states/app-options/app-options.state';

@NgModule({
  declarations: [
    TopMenuComponent,
    AppPage,
    LibraryRouteComponent,
    BackToTopButton
  ],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgxsModule.forRoot([UserState, ConfigState, AppOptionsState], { developmentMode: !environment.production }),
    NgxsStoragePluginModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    ToastModule.forRoot(),
    CoreModule,
    CommonUiModule,
    FacebookModule.forRoot(),
    SharedModule,
    MetaModule.forRoot(),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    LazyLoadImageDirective,
    MDBSpinningPreloader
  ],
  bootstrap: [AppPage]
})
export class AppModule {
  constructor() {
    // if (typeof window === 'undefined') {
    //   environment.baseUrl = 'bisisWS';
    // } else {
    //   environment.baseUrl = 'http://localhost:8080';
    // }
  }
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
