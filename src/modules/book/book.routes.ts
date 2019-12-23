import { Routes } from '@angular/router';
import { BookPage } from './pages/book/book.page';
import { UploadDescriptionCoverPage } from './pages/upload-description-cover-page/upload-description-cover-page';
import { PreviewRecordPage } from './pages/preview-record/preview-record.page';

export const BookRoutes: Routes = [
  // { path: ':lib/:id', component: BookPage},
  { path: ':lib/:id', component: PreviewRecordPage},
  { path: 'description-cover/:lib/:id', component: UploadDescriptionCoverPage}
];
