import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AutoCompleterModule, InputsModule, ButtonsModule, CheckboxModule, AccordionModule } from 'ng-uikit-pro-standard';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './components/home/main/main.component';
import { BookCardComponent } from './components/home/book-card/book-card.component';
import { BookComponent } from './components/book/book/book.component';
import { BookCarouselComponent } from './components/home/book-carousel/book-carousel.component';
import { ReadMoreComponent } from './components/book/read-more/read-more.component';
import { SearchMainComponent } from './components/search/search-main/search-main.component';
import { ResultComponent } from './components/search/result/result.component';
import { LoginComponent } from './components/profile/login/login.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { ShelfComponent } from './components/profile/shelf/shelf.component';
import { HistoryComponent } from './components/profile/history/history.component';
import { ChangePasswordComponent } from './components/profile/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BookCardComponent,
    BookComponent,
    BookCarouselComponent,
    ReadMoreComponent,
    SearchMainComponent,
    ResultComponent,
    LoginComponent,
    ProfileComponent,
    ShelfComponent,
    HistoryComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleterModule,
    InputsModule,
    ButtonsModule,
    CheckboxModule,
    AccordionModule,
    AppRoutingModule,
    MDBBootstrapModulesPro.forRoot(),
  ],
  providers: [
    MDBSpinningPreloader,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
