import { ERecordFormatType } from '../../../core/pipes/record-format.pipe';
import { Book, ERecordItemStatus } from '../../../../models/book.model';
import { ConfigState } from '../../../core/states/config/config.state';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BooksService } from '../../../core/services/books.service';
import { BookCoverUtils } from '../../../../utils/book-cover.utils';
import { UserState } from '../../../core/states/user/user.state';
import { RecordUtils } from '../../../../utils/record-utils';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { MetaService } from '@ngx-meta/core';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'book-page',
  templateUrl: 'book.page.html',
  styleUrls: ['book.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookPage implements OnInit {
  private readonly _booksService: BooksService;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _router: Router;
  private readonly _store: Store;
  private readonly _metaService: MetaService;
  private readonly _scrollToService: ScrollToService;
  private RecordFormatType = ERecordFormatType;
  public book: Book;
  public errImgUrl: string;
  public lib: string;
  public isAdmin: boolean;
  private showLocations: boolean;

  public constructor(booksService: BooksService, activatedRoute: ActivatedRoute,
                     router: Router, store: Store, metaService: MetaService, scrollToService: ScrollToService) {
    this._booksService = booksService;
    this._activatedRoute = activatedRoute;
    this._metaService = metaService;
    this._scrollToService = scrollToService;
    this._router = router;
    this._store = store;
    this.errImgUrl = BookCoverUtils.getBlankBookCover();
    this.showLocations = false;
    this.isAdmin = this._store.selectSnapshot(UserState.admin);
  }

  public ngOnInit(): void {
    this.lib = this._store.selectSnapshot(ConfigState.library);
    this._activatedRoute.paramMap
      .subscribe( async params => {
        const lib = params.get('lib');
        const bookId = params.get('id');
        if (lib && lib !== this.lib) {
          await this._router.navigate([`lib/${lib}`], {state: {proceedUrl: `/book/${lib}/${bookId}`}});
          return;
        }
        this._booksService.getBook(bookId).subscribe(
          async data => {
            await data;
            if (!data) {
              console.log('!data');
              await this._router.navigate(['/error/not-found']);
            } else {
              this._scrollToService.scrollTo({offset: 0});
              this.book = data;
              this.setMetaTags();
              this.book.isbdHtml = RecordUtils.reformatISBD(this.book.isbdHtml);
              if (this.book.items && this.book.items.length > 0) {
                this.showLocations = this.book.items.filter(i => i.status !== ERecordItemStatus.NotShowable).length > 0;
              }
            }
          },
          async () => {
            await this._router.navigate(['/error/not-found']);
            console.log('bookId');
          });
      });
  }

  private setMetaTags() {
    if (!this.book) {
      return;
    }
    const tags = [
      {property: 'og:title', content: this.book.title},
      {property: 'og:type', content: 'book'},
      {property: 'og:url', content: 'https://test.bisis.app' + window.location.pathname},
      {property: 'og:image', content: this.book.imageUrl ? this.book.imageUrl : '../../../../assets/book/nocover/1.jpg'},
      {property: 'og:description', content: this.book.description ? this.book.description : 'Није унет опис ове књиге'},
    ];
    for (const t of tags) {
      this._metaService.setTag(t.property, t.content);
    }
  }

}
