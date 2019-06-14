import { NgModule } from '@angular/core';
import { BooksService } from './services/books.service';
import { PrefixesService } from './services/prefixes.service';
import { UsersService } from './services/users.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  providers: [
    BooksService,
    PrefixesService,
    UsersService,
    AuthGuard
  ]
})
export class CoreModule {}
