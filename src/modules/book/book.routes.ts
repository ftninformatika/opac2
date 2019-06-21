import { Routes } from '@angular/router';
import { BookPage } from './pages/book/book.page';
import { Book2Page } from './pages/book2/book2.page';

export const BookRoutes: Routes = [
  { path: ':id', component: Book2Page }
];
