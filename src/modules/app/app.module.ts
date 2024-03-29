import {
  BrowserModule,
  HAMMER_GESTURE_CONFIG,
  HammerGestureConfig,
} from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MDBBootstrapModulesPro,
  ToastModule
} from 'ng-uikit-pro-standard';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { LibraryRouteComponent } from './library-route.component';
import { ConfigState } from '../core/states/config/config.state';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { environment } from '../../environments/environment';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { CommonUiModule } from '../shared/common-ui.module';
import { UserState } from '../core/states/user/user.state';
import { LazyLoadImageDirective } from 'ng-lazyload-image';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../core/core.module';
import { AppPage } from './pages/app/app.page';
import { NgxsModule } from '@ngxs/store';
import { FacebookModule } from 'ngx-facebook';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BackToTopButton } from './components/back-to-top.directive';
import { AppOptionsState } from '../core/states/app-options/app-options.state';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import '@angular/localize/init';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  overrides = {
    pinch: { enable: false },
    rotate: { enable: false },
  } as any;
}

@NgModule({
  declarations: [
    TopMenuComponent,
    AppPage,
    LibraryRouteComponent,
    BackToTopButton
  ],
  imports: [
    NgxsModule.forRoot([UserState, ConfigState, AppOptionsState], {
      developmentMode: !environment.production,
    }),
    NgxsStoragePluginModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    ToastModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule,
    CoreModule,
    CommonUiModule,
    FacebookModule.forRoot(),
    SharedModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    })
  ],
  providers: [
    LazyLoadImageDirective,
    MDBSpinningPreloader,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
  bootstrap: [AppPage],
})
export class AppModule {}
