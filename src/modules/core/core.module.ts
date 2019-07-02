import { NgModule } from '@angular/core';
import { BooksService } from './services/books.service';
import { PrefixesService } from './services/prefixes.service';
import { UsersService } from './services/users.service';
import { AuthGuard } from './guards/auth.guard';
import { TranslateLazyPipe } from './pipes/translate-lazy.pipe';

@NgModule({
  declarations: [
    TranslateLazyPipe
  ],
  providers: [
    BooksService,
    PrefixesService,
    UsersService,
    AuthGuard,
    TranslateLazyPipe
  ],
  exports: [
    TranslateLazyPipe
  ]
})
export class CoreModule {}
