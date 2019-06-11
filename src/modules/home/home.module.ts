import { NgModule } from '@angular/core';
import { MainPage } from './pages/main/main.page';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BookCarouselComponent } from './components/book-carousel/book-carousel.component';
import { CommonUiModule } from '../shared/common-ui.module';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routes';
import { BookCard2Component } from './components/book-card2/book-card2.component';
import { BookCollectionCarouselComponent } from './components/book-collection-carousel/book-collection-carousel.component';

@NgModule({
  imports: [
    CommonUiModule,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [
    BookCollectionCarouselComponent,
    BookCard2Component,
    MainPage,
    BookCardComponent,
    BookCarouselComponent
  ]
})
export class HomeModule { }
