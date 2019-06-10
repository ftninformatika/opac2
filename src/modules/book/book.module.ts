import { NgModule } from '@angular/core';
import { BookPage } from './pages/book/book.page';
import { ReadMoreComponent } from './components/read-more/read-more.component';
import { CommonUiModule } from '../shared/common-ui.module';
import { RouterModule } from '@angular/router';
import { BookRoutes } from './book.routes';

@NgModule({
  imports: [
    CommonUiModule,
    RouterModule.forChild(BookRoutes)
  ],
  declarations: [
    BookPage,
    ReadMoreComponent
  ]
})
export class BookModule { }
