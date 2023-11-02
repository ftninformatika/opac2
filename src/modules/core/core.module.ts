import { NgModule } from '@angular/core';
import { BooksService } from './services/books.service';
import { PrefixesService } from './services/prefixes.service';
import { UsersService } from './services/users.service';
import { AuthGuard } from './guards/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LibraryInterceptor } from './interceptors/library.interceptor';
import { ShortenStringPipe } from './pipes/shorten-string.pipe';
import { FillArrayPipe } from './pipes/fill-array.pipe';
import { MakeIndicatorPipe } from './pipes/make-indicator.pipe';
import { BookCoverDirective } from './directives/book-cover.directive';
import { RecordFormatPipe } from './pipes/record-format.pipe';
import { AdminGuard } from './guards/admin.guard';
import { OrderModule } from 'ngx-order-pipe';
import { CodersService } from './services/coders.service';

@NgModule({
  declarations: [
    ShortenStringPipe,
    FillArrayPipe,
    MakeIndicatorPipe,
    BookCoverDirective,
    RecordFormatPipe,
  ],
  imports: [],
  providers: [
    BooksService,
    PrefixesService,
    UsersService,
    CodersService,
    AdminGuard,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LibraryInterceptor,
      multi: true,
    },
  ],
  exports: [
    ShortenStringPipe,
    FillArrayPipe,
    MakeIndicatorPipe,
    OrderModule,
    BookCoverDirective,
    RecordFormatPipe
  ],
})
export class CoreModule {}
