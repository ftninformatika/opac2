import {
  AfterViewInit,
  Component,
  HostListener,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";
import { BooksService } from "../../../core/services/books.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { MetaService } from "@ngx-meta/core";
import { ScrollToService } from "@nicky-lenaers/ngx-scroll-to";
import { BookCoverUtils } from "../../../../utils/book-cover.utils";
import { UserState } from "../../../core/states/user/user.state";
import { ERecordFormatType } from "../../../core/pipes/record-format.pipe";
import { Book, ERecordItemStatus } from "../../../../models/book.model";
import { ConfigState } from "../../../core/states/config/config.state";
import { RecordUtils } from "../../../../utils/record-utils";
import { IPrefixValue } from "../../../../models/prefix-value.model";
import { SearchUtil } from "../../../../utils/search-util";
import { IResultPageOptionsInitial } from "../../../../models/search/result-page-options.model";
import { CryptoUtils } from "../../../../utils/crypto.utils";

@Component({
  selector: "preview-record",
  templateUrl: "preview-record.page.html",
  styleUrls: ["preview-record.page.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class PreviewRecordPage implements OnInit {
  private readonly _booksService: BooksService;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _router: Router;
  private readonly _store: Store;
  private readonly _metaService: MetaService;
  private readonly _scrollToService: ScrollToService;
  RecordFormatType = ERecordFormatType;
  private showLocations: boolean;
  public book: Book;
  public errImgUrl: string;
  public lib: string;
  public isAdmin: boolean;
  public recordURL;

  public miradorWidth: string;

  public constructor(
    booksService: BooksService,
    activatedRoute: ActivatedRoute,
    router: Router,
    store: Store,
    metaService: MetaService,
    scrollToService: ScrollToService
  ) {
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
    this._activatedRoute.paramMap.subscribe(async (params) => {
      const lib = params.get("lib");
      const bookId = params.get("id");
      if (lib && lib !== this.lib) {
        await this._router.navigate([`lib/${lib}`], {
          state: { proceedUrl: `/book/${lib}/${bookId}` },
        });
        return;
      }
      this._booksService.getBook(bookId).subscribe(
        async (data) => {
          await data;
          if (!data) {
            await this._router.navigate(["/error/not-found"]);
          } else {
            this.recordURL = window.location.href;
            this._scrollToService.scrollTo({ offset: 0 });
            this.book = data;
            console.log(this.book);
            this.setMetaTags();
            this.book.isbdHtml = RecordUtils.reformatISBD(this.book.isbdHtml);
            if (this.book.items && this.book.items.length > 0) {
              this.showLocations =
                this.book.items.filter(
                  (i) => i.status !== ERecordItemStatus.NotShowable
                ).length > 0;
            }
          }
        },
        async () => {
          await this._router.navigate(["/error/not-found"]);
        }
      );
    });

    this.miradorWidth = "0%";
  }

  public share(socialNetwork: string) {
    switch (socialNetwork) {
      case "fb":
        {
          const url = "http://www.facebook.com/sharer.php?u=" + this.recordURL;
          const newWindow = window.open(
            url,
            "name",
            "height=500,width=520,top=200,left=300,resizable"
          );
          if (window.focus) {
            newWindow.focus();
          }
        }
        break;
      case "tw":
        {
          const url = "https://twitter.com/intent/tweet?text=" + this.recordURL;
          const newWindow = window.open(
            url,
            "name",
            "height=500,width=520,top=200,left=300,resizable"
          );
          if (window.focus) {
            newWindow.focus();
          }
        }
        break;
      case "li":
        {
          const url =
            "https://www.linkedin.com/shareArticle?mini=true&url=" +
            this.recordURL;
          const newWindow = window.open(
            url,
            "name",
            "height=500,width=520,top=200,left=300,resizable"
          );
          if (window.focus) {
            newWindow.focus();
          }
        }
        break;
      default:
        break;
    }
  }

  public async linkedSearch(pref: string, val: string) {
    if (!pref || !val) {
      return;
    }
    const prefVal: IPrefixValue = {
      value: val,
      prefName: pref,
    };
    const searchModel = SearchUtil.generateSearchModelFromAutoComplete(prefVal);
    const pageOptions = { ...IResultPageOptionsInitial };
    pageOptions.lib = this._store.selectSnapshot(ConfigState.library);
    const uriChunk = `query=${JSON.stringify(
      searchModel
    )}&pageOptions=${JSON.stringify(pageOptions)}`;
    const encodedURI = CryptoUtils.encryptData(uriChunk);
    await this._router.navigate(["/search/result"], {
      queryParams: { s: encodedURI },
    });
  }

  private setMetaTags() {
    if (!this.book) {
      return;
    }
    const tags = [
      { property: "og:title", content: this.book.title },
      { property: "og:type", content: "book" },
      { property: "og:url", content: window.location.href },
      {
        property: "og:image",
        content: this.book.imageUrl
          ? this.book.imageUrl
          : "../../../../assets/book/nocover/1.jpg",
      },
      {
        property: "og:description",
        content: this.book.description
          ? this.book.description
          : "Није унет опис ове књиге",
      },
    ];
    for (const t of tags) {
      this._metaService.setTag(t.property, t.content);
    }
  }

  public showMiradorViewer() {
    if (this.miradorWidth === "0%") this.miradorWidth = "100%";
    else this.miradorWidth = "0%";
  }
}
