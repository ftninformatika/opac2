import { ListOfFiltersComponent } from './components/list-of-filters/list-of-filters.component';
import { SearchFiltersComponent } from './components/search-filters/search-filters.component';
import { BookResultBrief } from './components/book-result-brief/book-result-brief.component';
import { SearchTopNavComponent } from './components/search-top-nav/search-top-nav.component';
import { SearchMainPage } from './pages/search-main/search-main.page';
import { CommonUiModule } from '../shared/common-ui.module';
import { ResultPage } from './pages/result/result.page';
import { NgxPaginationModule } from 'ngx-pagination';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { SearchRoutes } from './search.routes';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonUiModule,
    NgxPaginationModule,
    RouterModule.forChild(SearchRoutes),
    CoreModule
  ],
  declarations: [
    ListOfFiltersComponent,
    SearchTopNavComponent,
    SearchFiltersComponent,
    BookResultBrief,
    SearchMainPage,
    ResultPage
  ]
})
export class SearchModule { }
