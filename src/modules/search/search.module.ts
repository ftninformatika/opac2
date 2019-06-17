import { NgModule } from '@angular/core';
import { SearchMainPage } from './pages/search-main/search-main.page';
import { ResultPage } from './pages/result/result.page';
import { CommonUiModule } from '../shared/common-ui.module';
import { RouterModule } from '@angular/router';
import { SearchRoutes } from './search.routes';
import { BookResultBrief } from './components/book-result-brief/book-result-brief.component';
import { BookResultCard } from './components/book-result-card/book-result-card.component';
import { SearchFiltersComponent } from './components/search-filters/search-filters.component';

@NgModule({
  imports: [
    CommonUiModule,
    RouterModule.forChild(SearchRoutes)
  ],
  declarations: [
    SearchFiltersComponent,
    BookResultCard,
    BookResultBrief,
    SearchMainPage,
    ResultPage
  ]
})
export class SearchModule { }
