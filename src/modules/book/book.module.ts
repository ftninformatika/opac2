import { NgModule } from '@angular/core';
import { ReadMoreComponent } from './components/read-more/read-more.component';
import { CommonUiModule } from '../shared/common-ui.module';
import { RouterModule } from '@angular/router';
import { BookRoutes } from './book.routes';
import { ItemsAvailabilityCardComponent } from './components/items-availability-card/items-availability-card.component';
import { BookPage } from './pages/book/book.page';
import { SideMiscComponent } from './components/side-misc/side-misc';

@NgModule({
  imports: [
    CommonUiModule,
    RouterModule.forChild(BookRoutes)
  ],
  declarations: [
    ItemsAvailabilityCardComponent,
    BookPage,
    SideMiscComponent,
    ReadMoreComponent
  ]
})
export class BookModule { }
