import { Routes } from '@angular/router';
import { BookPage } from './pages/book/book.page';

export const BookRoutes: Routes = [
  { path: ':id', component: BookPage }
];
