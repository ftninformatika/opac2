import { Routes } from '@angular/router';
import { ProfilePage } from './pages/profile/profile.page';
import { ShelfPage } from './pages/shelf/shelf.page';
import { LoginPage } from './pages/login/login.page';
import { HistoryPage } from './pages/history/history.page';
import { ChangePasswordPage } from './pages/change-password/change-password.page';
import { AuthGuard } from '../core/guards/auth.guard';
import { ActivateAccountPage } from './pages/activate-account/activate-account.page';

export const UserRoutes: Routes = [
  {
    path: 'profile',
    component: ProfilePage,
    canActivate: [AuthGuard]
  },
  {
    path: 'shelf',
    component: ShelfPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'history',
    component: HistoryPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'change-password',
    component: ChangePasswordPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'activate-account:activateToken',
    component: ActivateAccountPage,
    canActivate: [AuthGuard]
  }
];
