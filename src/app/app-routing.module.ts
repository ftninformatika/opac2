import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/home/main/main.component';
import { BookComponent } from './components/book/book/book.component';
import { SearchMainComponent } from './components/search/search-main/search-main.component';
import { ResultComponent } from './components/search/result/result.component';
import { LoginComponent } from './components/profile/login/login.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { ShelfComponent } from './components/profile/shelf/shelf.component';
import { HistoryComponent } from './components/profile/history/history.component';
import { ChangePasswordComponent } from './components/profile/change-password/change-password.component';

const routes: Routes = [
  {path: 'book/:id', component: BookComponent},
  {path: 'search', component: SearchMainComponent},
  {path: 'result', component: ResultComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'shelf', component: ShelfComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'change-password', component: ChangePasswordComponent},
  {path: '', pathMatch: 'full', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
