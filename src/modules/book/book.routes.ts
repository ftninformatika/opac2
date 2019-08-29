import { Routes } from '@angular/router';
import { BookPage } from './pages/book/book.page';

export const BookRoutes: Routes = [
  { path: ':lib/:id', component: BookPage},
  { path: ':id', component: BookPage }
];
