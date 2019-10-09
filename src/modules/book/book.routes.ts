import { Routes } from '@angular/router';
import { BookPage } from './pages/book/book.page';
import { UploadDescriptionCoverPage } from './pages/upload-description-cover-page/upload-description-cover-page';

export const BookRoutes: Routes = [
  { path: ':lib/:id', component: BookPage},
  { path: 'description-cover/:lib/:id', component: UploadDescriptionCoverPage},
  // { path: ':id', component: BookPage }
];
