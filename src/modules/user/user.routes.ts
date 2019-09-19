import { ActivateAccountPage } from './pages/activate-account/activate-account.page';
import { ChangePasswordPage } from './pages/change-password/change-password.page';
import { ProfilePage } from './pages/profile/profile.page';
import { HistoryPage } from './pages/history/history.page';
import { AuthGuard } from '../core/guards/auth.guard';
import { ShelfPage } from './pages/shelf/shelf.page';
import { LoginPage } from './pages/login/login.page';
import { Routes } from '@angular/router';
import { AdminCollectionsPage } from './pages/admin-collections/admin-collections.page';
import { AdminGuard } from '../core/guards/admin.guard';

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
    path: 'admin-collections',
    component: AdminCollectionsPage,
    canActivate: [AdminGuard]
  },
  {
    path: 'activate-account/:activateToken',
    component: ActivateAccountPage
  },
  {
    path: 'restart-password/:activateToken',
    component: ActivateAccountPage
  }
];
