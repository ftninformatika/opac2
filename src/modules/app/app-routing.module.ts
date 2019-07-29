import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryRouteComponent } from './library-route.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: './../home/home.module#HomeModule' },
  { path: ':lib', component: LibraryRouteComponent},
  { path: 'book', loadChildren: './../book/book.module#BookModule' },
  { path: 'search', loadChildren: './../search/search.module#SearchModule' },
  { path: 'user', loadChildren: './../user/user.module#UserModule' },
  { path: 'error', loadChildren: './../errors/errors.module#ErrorsModule' },
  { path: '**', redirectTo: 'error/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
