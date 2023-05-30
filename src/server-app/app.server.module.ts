import { NgModule } from "@angular/core";

import { AppPage } from "../modules/app/pages/app/app.page";
import { AppModule } from "../modules/app/app.module";
import { ServerModule } from "@angular/platform-server";
// import { UniversalInterceptor } from '../modules/core/interceptors/universal.interceptor';

@NgModule({
  imports: [AppModule, ServerModule],
  bootstrap: [AppPage],
})
export class AppServerModule {}
