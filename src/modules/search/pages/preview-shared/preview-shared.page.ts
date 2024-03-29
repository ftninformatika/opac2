import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BooksService } from '../../../core/services/books.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CryptoUtils } from '../../../../utils/crypto.utils';
import {IResultPageOptionsInitial, IResultPageSearchRequest} from '../../../../models/search/result-page-options.model';
import { Book } from '../../../../models/book.model';
import { ToastService } from 'ng-uikit-pro-standard';
import { Store } from '@ngxs/store';
import { ConfigState } from '../../../core/states/config/config.state';
import {AppOptionsState} from '../../../core/states/app-options/app-options.state';

@Component({
  selector: 'preview-shared-page',
  templateUrl: 'preview-shared.page.html',
  styleUrls: ['preview-shared.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PreviewSharedPage implements OnInit {
  public static readonly PagePathChunk = 'preview-books/';
  private readonly _bookService: BooksService;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _toastService: ToastService;
  private readonly _router: Router;
  private readonly _store: Store;
  public books: Book[];
  public lib: string;

  public constructor(bookService: BooksService, activatedRoute: ActivatedRoute, toastService: ToastService, router: Router, store: Store) {
    this._bookService = bookService;
    this._activatedRoute = activatedRoute;
    this._toastService = toastService;
    this._router = router;
    this._store = store;
  }

  public async ngOnInit(): Promise<void> {
    this.lib = this._store.selectSnapshot(ConfigState.library);
    try {
      const encrReq = this._activatedRoute.snapshot.paramMap.get('l');
      if (!encrReq) {
        this.initFromState();
        return;
      }
      const req: IResultPageSearchRequest = JSON.parse(CryptoUtils.decryptData(encrReq));
      if (req.options.lib && req.options.lib !== this.lib) {
        await this._router.navigate([`lib/${req.options.lib}`],
          {state: {proceedUrl: `/search/${PreviewSharedPage.PagePathChunk + encrReq}`}});
        return;
      }
      this.searchByIds(req);
    } catch (e) {
      this._toastService.warning($localize`:@@greskaLinkNevazeci:Линк је неважећи, преусмерени сте на почетну страницу.`);
      await this._router.navigate(['/']);
      return;
    }
  }

  private async initFromState() {
    const recordIds = this._store.selectSnapshot(AppOptionsState.getShareSelectionRecords);
    if (!recordIds || recordIds.length === 0) {
      this._toastService.warning($localize`:@@greskaNeuspeloUcitavenjeKnjiga:Неуспело учитавање књига`);
      await this._router.navigate(['/']);
    }
    const req: IResultPageSearchRequest = {
      searchModel: null,
      options: {...IResultPageOptionsInitial},
      recordsIds: recordIds
    };
    this.searchByIds(req);
  }

  private searchByIds(req: IResultPageSearchRequest) {
    this._bookService.searchByIds(req)
      .subscribe(
        async res => {
          if (!res || !res.content || res.content.length === 0) {
            this._toastService.error($localize`:@@greskaUcitavenjeKnjiga:Грешка при учитавању књига!`);
            await this._router.navigate(['/']);
          }
          this.books = res.content;
        },
        async () => {
          this._toastService.error($localize`:@@serverskaGreskaUcitavenjeKnjiga:Серверска грешка, при учитавању књига!`);
          await this._router.navigate(['/']);
        }
      );
  }

}
