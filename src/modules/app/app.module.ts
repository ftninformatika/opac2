import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
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

@NgModule({
  declarations: [
    TopMenuComponent,
    AppPage
  ],
  imports: [
    CoreModule,
    CommonUiModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModulesPro.forRoot(),
    AppRoutingModule,
    NgxsModule.forRoot([UserState]),
    NgxsStoragePluginModule.forRoot()
  ],
  providers: [
    MDBSpinningPreloader,
  ],
  bootstrap: [AppPage]
})
export class AppModule { }
