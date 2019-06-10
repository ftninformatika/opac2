import { NgModule } from '@angular/core';
import { SearchMainPage } from './pages/search-main/search-main.page';
import { ResultPage } from './pages/result/result.page';
import { CommonUiModule } from '../shared/common-ui.module';
import { RouterModule } from '@angular/router';
import { SearchRoutes } from './search.routes';

@NgModule({
  imports: [
    CommonUiModule,
    RouterModule.forChild(SearchRoutes)
  ],
  declarations: [
    SearchMainPage,
    ResultPage
  ]
})
export class SearchModule { }
