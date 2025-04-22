import { ItemsAvailabilityCardComponent } from './components/items-availability-card/items-availability-card.component';
import { UploadDescriptionCoverPage } from './pages/upload-description-cover-page/upload-description-cover-page';
import { ItemsTableComponent } from './components/items-table/items-table.component';
import { BookStarRating } from './components/book-star-rating/book-star-rating';
import { ReadMoreComponent } from './components/read-more/read-more.component';
import { SideMiscComponent } from './components/side-misc/side-misc.component';
import { CommonUiModule } from '../shared/common-ui.module';
import { BookTabs } from './components/book-tabs/book-tabs';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableModule } from 'ng-uikit-pro-standard';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { BookRoutes } from './book.routes';
import { NgModule } from '@angular/core';
import {
  intersectionObserverPreset,
  LazyLoadImageModule,
} from 'ng-lazyload-image';
import { PreviewRecordPage } from './pages/preview-record/preview-record.page';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MiradorViewerComponent } from './components/mirador-viewer/mirador-viewer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset,
    }),
    RouterModule.forChild(BookRoutes),
    CommonUiModule,
    CoreModule,
    TableModule,
    SharedModule,
    NgbModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  declarations: [
    ItemsAvailabilityCardComponent,
    ItemsTableComponent,
    PreviewRecordPage,
    SideMiscComponent,
    ReadMoreComponent,
    UploadDescriptionCoverPage,
    BookTabs,
    BookStarRating,
    MiradorViewerComponent,
  ],
})
export class BookModule {}
