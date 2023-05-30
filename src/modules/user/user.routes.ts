import { AdminCollectionsPage } from './pages/admin-collections/admin-collections.page';
import { ActivateAccountPage } from './pages/activate-account/activate-account.page';
import { ActiveLendingsPage } from './pages/active-lendings/active-lendings.page';
import { ChangePasswordPage } from './pages/change-password/change-password.page';
import { RegisterInfoPage } from './pages/register-info/register-info.page';
import { ProfilePage } from './pages/profile/profile.page';
import { HistoryPage } from './pages/history/history.page';
import { AdminGuard } from '../core/guards/admin.guard';
import { AuthGuard } from '../core/guards/auth.guard';
import { ShelfPage } from './pages/shelf/shelf.page';
import { LoginPage } from './pages/login/login.page';
import { Routes } from '@angular/router';
import {ActiveReservationsPage} from "./pages/active-reservations/active-reservations.page";
import {EventsComponent} from "./pages/admin/events/events.component";
import {FaqComponent} from "./pages/admin/faq/faq.component";
import {MessagePage} from "./pages/admin/message/message.page";
import {NotificationComponent} from "./pages/admin/notifications/notification.component";
import {LocationComponent} from "./pages/admin/location/location.component";

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
    path: ':libCode/login',
    component: LoginPage
  },
  {
    path: 'history',
    component: HistoryPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'active-lendings',
    component: ActiveLendingsPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'active-reservations',
    component: ActiveReservationsPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'register-info',
    component: RegisterInfoPage
  },
  {
    path: 'register-info/:lib',
    component: RegisterInfoPage
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
    path: 'admin-chat',
    component: MessagePage,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin-events',
    component: EventsComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin-faq',
    component: FaqComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin-notifications',
    component: NotificationComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin-locations',
    component: LocationComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'activate-account/:activateToken',
    component: ActivateAccountPage
  },
  {
    path: 'restart-password/:activateToken',
    component: ActivateAccountPage
  },
  {
    path: 'admin-cover-description-upload/:lib/:recordId',
    component: ActivateAccountPage
  }
];
