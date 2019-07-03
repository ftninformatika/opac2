import { NgModule } from '@angular/core';
import { MainPage } from './pages/main/main.page';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BookCarouselComponent } from './components/book-carousel/book-carousel.component';
import { CommonUiModule } from '../shared/common-ui.module';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routes';
import { BookCollectionCarouselComponent } from './components/book-collection-carousel/book-collection-carousel.component';
import { CollectionCarouselComponent } from './components/collection-carousel/collection-carousel.component';
import { CoreModule } from '../core/core.module';
import { BookCard2Component } from './components/book-card2/book-card2.component';
import { intersectionObserverPreset, LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonUiModule,
    CoreModule,
    RouterModule.forChild(HomeRoutes),
    LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset
    })
  ],
  declarations: [
    CollectionCarouselComponent,
    BookCollectionCarouselComponent,
    BookCard2Component,
    MainPage,
    BookCardComponent,
    BookCarouselComponent
  ],
  exports: [
    BookCard2Component
  ]
})
export class HomeModule { }
