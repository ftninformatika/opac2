import { ItemsAvailabilityCardComponent } from './components/items-availability-card/items-availability-card.component';
import { ItemsTableComponent } from './components/items-table/items-table.component';
import { ReadMoreComponent } from './components/read-more/read-more.component';
import { SideMiscComponent } from './components/side-misc/side-misc';
import { CommonUiModule } from '../shared/common-ui.module';
import { BookPage } from './pages/book/book.page';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { BookRoutes } from './book.routes';
import { NgModule } from '@angular/core';
import { TableModule } from 'ng-uikit-pro-standard';

@NgModule({
  imports: [
    CommonUiModule,
    RouterModule.forChild(BookRoutes),
    CoreModule,
    TableModule
  ],
  declarations: [
    ItemsAvailabilityCardComponent,
    ItemsTableComponent,
    SideMiscComponent,
    ReadMoreComponent,
    BookPage
  ]
})
export class BookModule { }
