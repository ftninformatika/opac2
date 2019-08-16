import { SelectedFiltersComponent } from './components/selected-filters/selected-filters.component';
import { ListOfFiltersComponent } from './components/list-of-filters/list-of-filters.component';
import { SearchFiltersComponent } from './components/search-filters/search-filters.component';
import { BookResultBrief } from './components/book-result-brief/book-result-brief.component';
import { SearchTopNavComponent } from './components/search-top-nav/search-top-nav.component';
import { ResultTableView } from './components/result-table-view/result-table-view.component';
import { SearchMainPage } from './pages/search-main/search-main.page';
import { DropdownModule, TableModule } from 'ng-uikit-pro-standard';
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
    CoreModule,
    DropdownModule,
    TableModule
  ],
  declarations: [
    ResultTableView,
    SelectedFiltersComponent,
    ListOfFiltersComponent,
    SearchTopNavComponent,
    SearchFiltersComponent,
    BookResultBrief,
    SearchMainPage,
    ResultPage
  ]
})
export class SearchModule { }
