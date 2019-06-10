import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/home/main/main.component';
import { BookComponent } from './components/book/book/book.component';
import { SearchMainComponent } from './components/search/search-main/search-main.component';
import { ResultComponent } from './components/search/result/result.component';

const routes: Routes = [
  {
    path: 'book/:id', component: BookComponent
  },
  {
    path: 'search', component: SearchMainComponent
  },
  {
    path: 'result', component: ResultComponent
  },
  {
    path: 'user', loadChildren: './../user/user.module#UserModule'
  },
  // {
  //   path: 'login', component: LoginPage
  // },
  // {
  //   path: 'profile', component: ProfilePage
  // },
  // {
  //   path: 'shelf', component: ShelfPage
  // },
  // {
  //   path: 'history', component: HistoryPage
  // },
  // {
  //   path: 'change-password', component: ChangePasswordPage
  // },
  {
    path: '', pathMatch: 'full', component: MainComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
