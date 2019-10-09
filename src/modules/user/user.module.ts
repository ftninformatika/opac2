import { AdminCollectionEditor } from './components/admin-collection-editor/admin-collection-editor';
import { AdminCollectionsPage } from './pages/admin-collections/admin-collections.page';
import { ActivateAccountPage } from './pages/activate-account/activate-account.page';
import { ChangePasswordPage } from './pages/change-password/change-password.page';
import { CommonUiModule } from '../shared/common-ui.module';
import { HistoryPage } from './pages/history/history.page';
import { ProfilePage } from './pages/profile/profile.page';
import { LoginPage } from './pages/login/login.page';
import { ShelfPage } from './pages/shelf/shelf.page';
import { HomeModule } from '../home/home.module';
import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routes';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    HomeModule,
    CommonUiModule,
    RouterModule.forChild(UserRoutes),
  ],
  declarations: [
    AdminCollectionsPage,
    ActivateAccountPage,
    LoginPage,
    ProfilePage,
    ShelfPage,
    HistoryPage,
    ChangePasswordPage,
    AdminCollectionEditor
  ]
})
export class UserModule {}
