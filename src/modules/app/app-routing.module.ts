import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryRouteComponent } from './library-route.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./../home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'book',
    loadChildren: () =>
      import('./../book/book.module').then((m) => m.BookModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./../search/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./../user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./../errors/errors.module').then((m) => m.ErrorsModule),
  },
  { path: 'lib/:lib', component: LibraryRouteComponent },
  { path: 'lib/:lib/kiosk/:kioskLocation', component: LibraryRouteComponent },
  { path: '**', redirectTo: 'error/not-found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
