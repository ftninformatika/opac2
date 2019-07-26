import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

import { AppRoutingModule } from './app-routing.module';

import { AppPage } from './pages/app/app.page';
import { CoreModule } from '../core/core.module';
import { CommonUiModule } from '../shared/common-ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { UserState } from '../core/states/user/user.state';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { SharedModule } from '../shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { LazyLoadImageDirective } from 'ng-lazyload-image';
import { environment } from '../../environments/environment';
import { LibraryRouteComponent } from './library-route.component';
import { ConfigState } from '../core/states/config/config.state';

@NgModule({
  declarations: [
    TopMenuComponent,
    AppPage,
    LibraryRouteComponent
  ],
  imports: [
    NgxsModule.forRoot([UserState, ConfigState], { developmentMode: !environment.production }),
    NgxsStoragePluginModule.forRoot(),
    TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
    }),
    CoreModule,
    CommonUiModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    AppRoutingModule
  ],
  providers: [
    LazyLoadImageDirective,
    MDBSpinningPreloader
  ],
  bootstrap: [AppPage]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
