import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

import { AppRoutingModule } from './app-routing.module';

import { AppPage } from './page/app.page';
import { MainComponent } from './components/home/main/main.component';
import { BookCardComponent } from './components/home/book-card/book-card.component';
import { BookComponent } from './components/book/book/book.component';
import { BookCarouselComponent } from './components/home/book-carousel/book-carousel.component';
import { ReadMoreComponent } from './components/book/read-more/read-more.component';
import { SearchMainComponent } from './components/search/search-main/search-main.component';
import { ResultComponent } from './components/search/result/result.component';
import { CoreModule } from '../core/core.module';
import { CommonUiModule } from '../shared/common-ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppPage,
    MainComponent,
    BookCardComponent,
    BookComponent,
    BookCarouselComponent,
    ReadMoreComponent,
    SearchMainComponent,
    ResultComponent,
    // LoginPage,
    // ProfilePage,
    // ShelfPage,
    // HistoryPage,
    // ChangePasswordPage
  ],
  imports: [
    CoreModule,
    CommonUiModule,
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModulesPro.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    MDBSpinningPreloader,
  ],
  bootstrap: [AppPage]
})
export class AppModule { }
