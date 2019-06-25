import { NgModule } from '@angular/core';
import { LoginPage } from './pages/login/login.page';
import { ProfilePage } from './pages/profile/profile.page';
import { ShelfPage } from './pages/shelf/shelf.page';
import { HistoryPage } from './pages/history/history.page';
import { ChangePasswordPage } from './pages/change-password/change-password.page';
import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routes';
import { CommonUiModule } from '../shared/common-ui.module';
import { HomeModule } from '../home/home.module';

@NgModule({
  imports: [
    HomeModule,
    CommonUiModule,
    RouterModule.forChild(UserRoutes),
  ],
  declarations: [
    LoginPage,
    ProfilePage,
    ShelfPage,
    HistoryPage,
    ChangePasswordPage
  ]
})
export class UserModule {}
