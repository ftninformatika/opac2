import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ShelfComponent } from './shelf/shelf.component';
import { HistoryComponent } from './history/history.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routes';

@NgModule({
  imports: [
    RouterModule.forChild(UserRoutes)
  ],
  declarations: [
    // LoginComponent,
    ProfileComponent,
    // ShelfComponent,
    // HistoryComponent,
    // ChangePasswordComponent
  ]
})
export class UserModule {}
