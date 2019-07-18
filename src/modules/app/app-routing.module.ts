import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '',  children: [
      { path: '', pathMatch: 'full', loadChildren: './../home/home.module#HomeModule' },
      { path: 'book', loadChildren: './../book/book.module#BookModule' },
      { path: 'search', loadChildren: './../search/search.module#SearchModule' },
      { path: 'user', loadChildren: './../user/user.module#UserModule' },
    ]},
  { path: 'error', loadChildren: './../errors/errors.module#ErrorsModule' },
  { path: '**', redirectTo: 'error/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
