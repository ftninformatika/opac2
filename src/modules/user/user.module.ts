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
import { RouterModule} from '@angular/router';
import { UserRoutes } from './user.routes';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { MDBBootstrapModulesPro} from 'ng-uikit-pro-standard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ActiveLendingsPage } from './pages/active-lendings/active-lendings.page';
import { RegisterInfoPage } from './pages/register-info/register-info.page';
import { ActiveReservationsPage } from './pages/active-reservations/active-reservations.page';
import {ChatPage} from "./pages/admin/chat/chat.page";
import {EventsComponent} from "./pages/admin/events/events.component";
import {FaqComponent} from "./pages/admin/faq/faq.component";

@NgModule({
  imports: [
    HomeModule,
    CommonUiModule,
    RouterModule.forChild(UserRoutes),
    CoreModule,
    MDBBootstrapModulesPro,
    DragDropModule,
  ],
  declarations: [
    AdminCollectionsPage,
    RegisterInfoPage,
    ActiveLendingsPage,
    ActivateAccountPage,
    LoginPage,
    ProfilePage,
    ShelfPage,
    HistoryPage,
    ChangePasswordPage,
    AdminCollectionEditor,
    ActiveReservationsPage,
    ChatPage,
    EventsComponent,
    FaqComponent
  ]
})
export class UserModule {}
