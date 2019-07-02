import { NgModule } from '@angular/core';
import { BooksService } from './services/books.service';
import { PrefixesService } from './services/prefixes.service';
import { UsersService } from './services/users.service';
import { AuthGuard } from './guards/auth.guard';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    TranslateModule
  ],
  providers: [
    BooksService,
    PrefixesService,
    UsersService,
    AuthGuard
  ],
  exports: [
    TranslateModule
  ]
})
export class CoreModule {}
