import { NgModule } from '@angular/core';
import { BooksService } from './services/books.service';
import { PrefixesService } from './services/prefixes.service';
import { UsersService } from './services/users.service';
import { AuthGuard } from './guards/auth.guard';
import { TranslateModule } from '@ngx-translate/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LibraryInterceptor } from './interceptors/library.interceptor';
import { ShortenStringPipe } from './pipes/shorten-string.pipe';

@NgModule({
  declarations: [
    ShortenStringPipe
  ],
  imports: [
    TranslateModule
  ],
  providers: [
    BooksService,
    PrefixesService,
    UsersService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LibraryInterceptor,
      multi: true
    }
  ],
  exports: [
    TranslateModule,
    ShortenStringPipe,
  ]
})
export class CoreModule {}
