import { NgModule } from '@angular/core';
import { BooksService } from './services/books.service';
import { PrefixesService } from './services/prefixes.service';
import { UsersService } from './services/users.service';

@NgModule({
  providers: [
    BooksService,
    PrefixesService,
    UsersService
  ]
})
export class CoreModule {}
