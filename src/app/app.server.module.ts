import { NgModule } from '@angular/core';

import { AppPage } from '../modules/app/pages/app/app.page';
import { AppModule } from '../modules/app/app.module';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { ServerModule } from '@angular/platform-server';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { UniversalInterceptor } from '../modules/core/interceptors/universal.interceptor';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
  ],
  bootstrap: [AppPage],
  providers: [],
})
export class AppServerModule {}
