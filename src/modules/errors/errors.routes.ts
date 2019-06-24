import { Routes } from '@angular/router';
import { AccessDeniedErrorPage } from './pages/access-denied/access-denied.page';
import { NotFoundErrorPage } from './pages/not-found/not-found.page';
import { InternalServerErrorPage } from './pages/internal-server-error/internal-server-error.page';

export const ErrorRoutes: Routes = [
  { path: 'internal-server-error', component: InternalServerErrorPage },
  { path: 'not-found', component: NotFoundErrorPage },
  { path: 'access-denied', component: AccessDeniedErrorPage }
];
