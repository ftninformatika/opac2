import { Routes } from '@angular/router';
import { ProfilePage } from './pages/profile/profile.page';
import { ShelfPage } from './pages/shelf/shelf.page';
import { LoginPage } from './pages/login/login.page';
import { HistoryPage } from './pages/history/history.page';
import { ChangePasswordPage } from './pages/change-password/change-password.page';

export const UserRoutes: Routes = [
  { path: 'profile', component: ProfilePage },
  { path: 'shelf', component: ShelfPage },
  { path: 'login', component: LoginPage },
  { path: 'history', component: HistoryPage },
  { path: 'change-password', component: ChangePasswordPage }
];
