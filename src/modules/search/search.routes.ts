import { Routes } from '@angular/router';
import { SearchMainPage } from './pages/search-main/search-main.page';
import { ResultPage } from './pages/result/result.page';
import { PreviewSharedPage } from './pages/preview-shared/preview-shared.page';

export const SearchRoutes: Routes = [
  { path: 'advanced-search', component: SearchMainPage, pathMatch: 'full' },
  { path: 'advanced-search/:lib', component: SearchMainPage },
  { path: 'result', component: ResultPage },
  { path: 'result?lib=:lib&text=:text&prefix=:prefix', component: ResultPage },
  { path: 'selected-books', component: PreviewSharedPage },
  { path: 'preview-books/:l', component: PreviewSharedPage }
];
