import { NgModule } from '@angular/core';
import { SearchMainPage } from './pages/search-main/search-main.page';
import { ResultPage } from './pages/result/result.page';
import { CommonUiModule } from '../shared/common-ui.module';
import { RouterModule } from '@angular/router';
import { SearchRoutes } from './search.routes';
import { BookResultBrief } from './components/book-result-brief/book-result-brief.component';
import { SearchFiltersComponent } from './components/search-filters/search-filters.component';
import { SearchTopNavComponent } from './components/search-top-nav/search-top-nav.component';
import { CoreModule } from '../core/core.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonUiModule,
    NgxPaginationModule,
    RouterModule.forChild(SearchRoutes),
    CoreModule
  ],
  declarations: [
    SearchTopNavComponent,
    SearchFiltersComponent,
    BookResultBrief,
    SearchMainPage,
    ResultPage
  ]
})
export class SearchModule { }
