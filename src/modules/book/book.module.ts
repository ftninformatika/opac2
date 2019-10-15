import { ItemsAvailabilityCardComponent } from './components/items-availability-card/items-availability-card.component';
import { UploadDescriptionCoverPage } from './pages/upload-description-cover-page/upload-description-cover-page';
import { ItemsTableComponent } from './components/items-table/items-table.component';
import { ReadMoreComponent } from './components/read-more/read-more.component';
import { SideMiscComponent } from './components/side-misc/side-misc.component';
import { CommonUiModule } from '../shared/common-ui.module';
import { BookTabs } from './components/book-tabs/book-tabs';
import { SharedModule } from '../shared/shared.module';
import { TableModule } from 'ng-uikit-pro-standard';
import { BookPage } from './pages/book/book.page';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { BookRoutes } from './book.routes';
import { NgModule } from '@angular/core';
import { BookStarRating } from './components/book-star-rating/book-star-rating';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonUiModule,
    RouterModule.forChild(BookRoutes),
    CoreModule,
    TableModule,
    SharedModule,
    NgbModule
  ],
  declarations: [
    ItemsAvailabilityCardComponent,
    ItemsTableComponent,
    SideMiscComponent,
    ReadMoreComponent,
    BookPage,
    UploadDescriptionCoverPage,
    BookTabs,
    BookStarRating
  ]
})
export class BookModule { }
