import { CollectionCarouselComponent } from './components/collection-carousel/collection-carousel.component';
import { intersectionObserverPreset, LazyLoadImageModule } from 'ng-lazyload-image';
import { BookCardComponent } from './components/book-card/book-card.component';
import { CommonUiModule } from '../shared/common-ui.module';
import { MainPage } from './pages/main/main.page';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routes';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomepageTabsComponent } from './components/homepage-tabs/hompage-tabs.component';

@NgModule({
  imports: [
    CommonUiModule,
    CoreModule,
    RouterModule.forChild(HomeRoutes),
    LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset
    }),
    SharedModule
  ],
  declarations: [
    CollectionCarouselComponent,
    HomepageTabsComponent,
    BookCardComponent,
    MainPage
  ],
  exports: [
    BookCardComponent
  ]
})
export class HomeModule { }
