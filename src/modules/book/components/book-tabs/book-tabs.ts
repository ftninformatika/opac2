import { AfterViewInit, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { Book } from '../../../../models/book.model';
import { ERecordFormatType } from '../../../core/pipes/record-format.pipe';
import { TabsetComponent } from 'ng-uikit-pro-standard';
import { IResultPageOptionsInitial } from '../../../../models/search/result-page-options.model';
import { ConfigState } from '../../../core/states/config/config.state';
import { CryptoUtils } from '../../../../utils/crypto.utils';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { SearchUtil } from '../../../../utils/search-util';
import { IPrefixValue } from '../../../../models/prefix-value.model';

@Component({
  selector: 'book-tabs',
  templateUrl: 'book-tabs.html',
  styleUrls: ['book-tabs.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookTabs implements AfterViewInit {
  @ViewChild('staticTabs', { static: true }) staticTabs: TabsetComponent;
  @Input() book: Book;
  private readonly _store: Store;
  private readonly _router: Router;
  public RecordFormatType = ERecordFormatType;
  public activeTabIndex = -1;
  // TODO: extend to remove content container if needed
  public showBody = false;

  public constructor(store: Store, router: Router) {
    this._store = store;
    this._router = router;
  }

  public ngAfterViewInit(): void {
    this.staticTabs.tabs[0].active = false;
  }

  public changeTab(event) {
    if (!event) {
      return;
    }
    if (event.activeTabIndex !== this.activeTabIndex) {
      this.activeTabIndex = event.activeTabIndex;
      this.showBody = true;
    } else {
      this.showBody = false;
    }
  }

  public async linkedSearch(pref: string, val: string) {
    if (!pref || !val) {
      return;
    }
    const prefVal: IPrefixValue = {
      value: val,
      prefName: pref
    };
    const searchModel = SearchUtil.generateSearchModelFromAutoComplete(prefVal);
    const pageOptions = {...IResultPageOptionsInitial};
    pageOptions.lib = this._store.selectSnapshot(ConfigState.library);
    const uriChunk = `query=${JSON.stringify(searchModel)}&pageOptions=${JSON.stringify(pageOptions)}`;
    const encodedURI = CryptoUtils.encryptData(uriChunk);
    await this._router.navigate(['/search/result'], {queryParams: {s: encodedURI}});
  }
}
