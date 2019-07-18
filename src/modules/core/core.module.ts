import { NgModule } from '@angular/core';
import { BooksService } from './services/books.service';
import { PrefixesService } from './services/prefixes.service';
import { UsersService } from './services/users.service';
import { AuthGuard } from './guards/auth.guard';
import { TranslateModule } from '@ngx-translate/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AutocompletePrefixPipe } from './pipes/autocomplete-prefix.pipe';

@NgModule({
  imports: [
    TranslateModule
  ],
  // declarations: {
  //   AutocompletePrefixPipe
  // },
  providers: [
    BooksService,
    PrefixesService,
    UsersService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  exports: [
    TranslateModule,
    // AutocompletePrefixPipe
  ]
})
export class CoreModule {}
