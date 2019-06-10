import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'book', loadChildren: './../book/book.module#BookModule' },
  { path: 'search', loadChildren: './../search/search.module#SearchModule' },
  { path: 'user', loadChildren: './../user/user.module#UserModule' },
  { path: '', pathMatch: 'full', loadChildren: './../home/home.module#HomeModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
