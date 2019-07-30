import { Routes } from '@angular/router';
import { SearchMainPage } from './pages/search-main/search-main.page';
import { ResultPage } from './pages/result/result.page';

export const SearchRoutes: Routes = [
  { path: '', component: SearchMainPage, pathMatch: 'full' },
  { path: 'result', component: ResultPage }
];
