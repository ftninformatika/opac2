import { NgModule } from '@angular/core';
import { CommonUiModule } from '../shared/common-ui.module';
import { NotFoundErrorPage } from './pages/not-found/not-found.page';
import { AccessDeniedErrorPage } from './pages/access-denied/access-denied.page';
import { InternalServerErrorPage } from './pages/internal-server-error/internal-server-error.page';
import { RouterModule } from '@angular/router';
import { ErrorRoutes } from './errors.routes';

@NgModule({
  imports: [
    CommonUiModule,
    RouterModule.forChild(ErrorRoutes)
  ],
  declarations: [
    NotFoundErrorPage,
    AccessDeniedErrorPage,
    InternalServerErrorPage
  ]
})
export class ErrorsModule {}
