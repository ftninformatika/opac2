import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

import { AppRoutingModule } from './app-routing.module';

import { AppPage } from './pages/app/app.page';
import { CoreModule } from '../core/core.module';
import { CommonUiModule } from '../shared/common-ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppPage
  ],
  imports: [
    CoreModule,
    CommonUiModule,
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModulesPro.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    MDBSpinningPreloader,
  ],
  bootstrap: [AppPage]
})
export class AppModule { }
