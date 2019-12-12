import { Component, HostListener, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import {
  IResultPageOptions,
  IResultPageOptionsInitial, IResultPageSearchRequest
} from '../../../../models/search/result-page-options.model';
import {
  AddRemoveIdToSelectedAction,
  AddMultipleIdsToSelected,
  AppOptionsState, IAppOptionsState,
  OptionsToDefault
} from '../../../core/states/app-options/app-options.state';
import { EFilterType } from '../../components/search-filters/search-filters.component';
import { IFiltersRes, ISelectedFilter } from '../../../../models/search/filter.model';
import { ConfigState } from '../../../core/states/config/config.state';
import { SearchService } from '../../../core/services/search.service';
import { ISearchModel } from '../../../../models/search/search.model';
import { SearchUtil } from '../../../../utils/search-util';
import { BooksService } from '../../../core/services/books.service';
import { CryptoUtils } from '../../../../utils/crypto.utils';
import { ISort } from '../../../../models/search/sort.model';
import { IResultPage } from '../../../../models/page.model';
import { ArrayUtils } from '../../../../utils/array.utils';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Book } from '../../../../models/book.model';
import { ToastService } from 'ng-uikit-pro-standard';
import { Location } from '@angular/common';
import {Select, Store} from '@ngxs/store';
import {PreviewSharedPage} from '../preview-shared/preview-shared.page';

export enum EDeviceWidth {
  GT_SM = 'gt_sm',
  LTE_SM = 'lte_sm',
  LTE_XM = 'lte_xsm'
}

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResultPage implements OnInit, OnDestroy {

  public static readonly PagePath = 'search/result?';
  @Select(AppOptionsState) appOptionsState;
  private readonly _booksService: BooksService;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _searchService: SearchService;
  private readonly _toastService: ToastService;
  private readonly _location: Location;
  private readonly _router: Router;
  private readonly _store: Store;

  public searchModel: ISearchModel;
  public resultPage: IResultPage;
  public searchResult: Book[];
  public deviceWidth = EDeviceWidth.GT_SM;
  public pageOptions: IResultPageOptions;
  public resultedFilters: IFiltersRes;
  public selectedFilters: ISelectedFilter[];
  public filtersLoaded: boolean;
  public searchPageUrl: string;
  public youSearchedText: string;
  public lib: string;
  public tableView: boolean;
  public shareSelectedLink: string;

  public constructor(booksService: BooksService, activatedRoute: ActivatedRoute,
                     router: Router, toastService: ToastService, location: Location, searchService: SearchService, store: Store) {
    this._booksService = booksService;
    this._activatedRoute = activatedRoute;
    this._router = router;
    this._toastService = toastService;
    this._location = location;
    this._searchService = searchService;
    this._store = store;
    // TODO: consider moving this and some more possible app settings to Redux State
    this.tableView = (window.localStorage.getItem('resultPreview') && window.localStorage.getItem('resultPreview') === 'table');
    this.shareSelectedLink = null;
    this.initValues();
  }

  public ngOnInit() {
    this._activatedRoute.queryParamMap.subscribe(
      async params => {
        try {
          if (params.get('s')) {
            this.populatePageProps(params);
          } else {
            await this.foreignSearch(params);
            return;
          }
        } catch (e) {
          console.error(e.toString());
          await this._router.navigate(['/']);
          return;
        }
        if (this.searchModel === null || this.pageOptions === null) {
          await this._router.navigate(['/']);
          return;
        }
        if (this.pageOptions.lib && this.pageOptions.lib !== this.lib) {
          await this._router.navigate([`lib/${this.pageOptions.lib}`], {state: {proceedUrl: this.searchPageUrl}});
          return;
        }
        this.youSearchedText = SearchUtil.getYouSearchedStringFromSearchModel(this.searchModel);
        let pageNum = 0;
        let pageSize = 10;
        if (this.pageOptions.currentPage > 0) {
          pageNum = this.pageOptions.currentPage - 1;
        }
        if (this.pageOptions.pageSize !== 10) {
          pageSize = this.pageOptions.pageSize;
        }
        this._booksService.search({searchModel: this.searchModel, options: this.pageOptions}, pageNum, pageSize).subscribe(
          async (res: IResultPage) => {
            await this.populateResultPage(res);
            this.filtersLoaded = false;
            this._searchService.getFilters({searchModel: this.searchModel, options: this.pageOptions})
              .subscribe(a => {
                this.resultedFilters = a;
                this.filtersLoaded = true;
                this.initSelectedFilters();
              });
          },
          () => this._router.navigate(['/'])
        );
      });
    this.onWindowResize();
  }

  public async goToSelectedBooks() {
    if (this._store.selectSnapshot(AppOptionsState.getShareSelectionRecords) === null) {
      return;
    } else {
      await this._router.navigate(['/search/selected-books']);
    }
  }

  public async selectAll() {
    const recIds = this.searchResult.map(b => b._id);
    await this._store.dispatch(new AddMultipleIdsToSelected(recIds));
  }

  public async clearSelection() {
    await this._store.dispatch(OptionsToDefault).toPromise();
  }

  public async addRemoveIdToShareList(recordId: string) {
    await this._store.dispatch(new AddRemoveIdToSelectedAction(recordId)).toPromise();
  }

  // TODO: move this to utils
  public copyLinkToClipboard(inputElement) {
    if (!inputElement) {
      return;
    }
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
    this._toastService.success('Линк за дељење је смештен у клипборд');
  }

  public generateShareLink(): string {
    try {
      const selectedRecIds = this._store.selectSnapshot(AppOptionsState.getShareSelectionRecords);
      if (!selectedRecIds || selectedRecIds.length === 0) {
        return null;
      }
      const req: IResultPageSearchRequest = {
        searchModel: null,
        options: this.pageOptions,
        recordsIds: selectedRecIds
      };
      req.options.lib = this.lib;
      this.shareSelectedLink =
        `http://localhost:4200/search/${PreviewSharedPage.PagePathChunk + CryptoUtils.encryptData(JSON.stringify(req))}`;
      return this.shareSelectedLink;
    } catch (e) {
      return null;
    }
  }

  private async foreignSearch(params: ParamMap) {
    const lib = params.get('lib');
    const text = params.get('text');
    const prefix = params.get('prefix');
    const options = {...IResultPageOptionsInitial};
    options.lib = lib;
    const searchModel = prefix ? SearchUtil.generateSearchModelFromAutoComplete({value: text, prefName: prefix})
      : SearchUtil.generateSearchModelFromAutoComplete(text);
    const uriChunk = `query=${JSON.stringify(searchModel)}&pageOptions=${JSON.stringify(options)}`;
    const encodedURI = CryptoUtils.encryptData(uriChunk);
    await this._router.navigate(['/search/result'], {queryParams: {s: encodedURI}});
  }

  private populatePageProps(params: ParamMap) {
    const hashString = params.get('s');
    const decryptedString = CryptoUtils.decryptData(hashString);
    const paramsChunks = decryptedString.split('&');
    const queryChunk = paramsChunks[0].split('=')[1];
    const pageOptionsCh = paramsChunks[1].split('=')[1];
    this.pageOptions = JSON.parse(pageOptionsCh);
    this.searchModel = JSON.parse(queryChunk);
    this.searchPageUrl = `${ResultPage.PagePath}s=${hashString}`;
  }

  public ngOnDestroy() {
    this.initValues();
  }

  private initValues() {
    this.youSearchedText = '';
    this.lib = this._store.selectSnapshot(ConfigState.library);
    this.searchModel = null;
    this.filtersLoaded = false;
    this.selectedFilters = [];
    this.resultedFilters = {
      locations: null,
      authors: null,
      languages: null,
      pubYears: null,
      pubTypes: null,
      subjects: null
    };
  }

  @HostListener('window:resize')
  public onWindowResize() {
    if (window.innerWidth >= 768) { this.deviceWidth = EDeviceWidth.GT_SM; } else { this.deviceWidth = EDeviceWidth.LTE_SM; }
  }

  public onPageChange($event: number) {
    if ($event < 1) {
      return;
    }
    this._booksService.search({searchModel: this.searchModel, options: this.pageOptions}, $event - 1, this.pageOptions.pageSize).subscribe(
      (res: IResultPage) => this.populateResultPage(res),
      () => this._router.navigate(['/'])
    );
  }

  public filterResults(filterItem: ISelectedFilter) {
    this.addRemoveSelectedFilters(filterItem);
    switch (filterItem.type) {
      case EFilterType.LOCATION: ArrayUtils.pushOrRemoveFromArrSelFilters(filterItem, this.pageOptions.filters.locations); break;
      case EFilterType.PUB_TYPE: ArrayUtils.pushOrRemoveFromArrSelFilters(filterItem, this.pageOptions.filters.pubTypes); break;
      case EFilterType.AUTHOR: ArrayUtils.pushOrRemoveFromArrSelFilters(filterItem, this.pageOptions.filters.authors); break;
      case EFilterType.LANGUAGE: ArrayUtils.pushOrRemoveFromArrSelFilters(filterItem, this.pageOptions.filters.languages); break;
      case EFilterType.PUB_YEAR: ArrayUtils.pushOrRemoveFromArrSelFilters(filterItem, this.pageOptions.filters.pubYears); break;
      case EFilterType.SUB_LOCATION: ArrayUtils.pushOrRemoveFromArrSelFilters(filterItem, this.pageOptions.filters.subLocations); break;
      case EFilterType.SUBJECT: ArrayUtils.pushOrRemoveFromArrSelFilters(filterItem, this.pageOptions.filters.subjects); break;
      default: return;
    }
    this.searchWithFilters();
  }

  public onPageSizeChange(size: any) {
    if (size < 0) {
      return;
    }
    this.pageOptions.pageSize = parseInt(size, 10);
    this._booksService.search({searchModel: this.searchModel, options: this.pageOptions},
      this.pageOptions.currentPage - 1, this.pageOptions.pageSize).subscribe(
      (res: IResultPage) => this.populateResultPage(res),
      () => this._router.navigate(['/'])
    );
  }

  public onSortChanged(newSort: ISort) {
    if (!newSort || (newSort.ascending === this.pageOptions.sort.ascending && newSort.type === this.pageOptions.sort.type)) {
      return;
    }
    this.pageOptions.sort = newSort;
    this._booksService.search({searchModel: this.searchModel, options: this.pageOptions},
      0, this.pageOptions.pageSize).subscribe(
      async (res: IResultPage) => {
        await this.populateResultPage(res);
      },
      () => this._router.navigate(['/'])
    );
  }

  public onViewTypeChanged(event: boolean) {
    this.tableView = event;
  }

  private addRemoveSelectedFilters(filterItem: ISelectedFilter) {
    const el = this.selectedFilters.find(e => e.item.value === filterItem.item.value);
    let index = -1;
    if (el) {
      index = this.selectedFilters.indexOf(el);
    }
    if (filterItem.item.checked && index === -1) {
      this.selectedFilters.push(filterItem);
    } else {
      this.selectedFilters.splice(index, 1);
    }
  }

  private searchWithFilters() {
    this._booksService.search({searchModel: this.searchModel, options: this.pageOptions}).subscribe(
      async (res: IResultPage) => {
        await this.populateResultPage(res);
        this.filtersLoaded = false;
        this._searchService.getFilters({searchModel: this.searchModel, options: this.pageOptions})
          .subscribe(a => {
            this.resultedFilters = a;
            this.filtersLoaded = true;
          });
      },
      () => this._router.navigate(['/'])
    );
  }

  private initSelectedFilters() {
    if (this.selectedFilters.length !== 0) {
      return;
    }
    this.pageOptions.filters.authors.forEach(e => this.selectedFilters.push(e));
    this.pageOptions.filters.subLocations.forEach(e => this.selectedFilters.push(e));
    this.pageOptions.filters.locations.forEach(e => this.selectedFilters.push(e));
    this.pageOptions.filters.languages.forEach(e => this.selectedFilters.push(e));
    this.pageOptions.filters.pubTypes.forEach(e => this.selectedFilters.push(e));
    this.pageOptions.filters.pubYears.forEach(e => this.selectedFilters.push(e));
    this.pageOptions.filters.subjects.forEach(e => this.selectedFilters.push(e));
  }

  public async modifySearch() {
    await this._router.navigate(['/search/advanced-search'], {state: this.searchModel});
  }

  private async populateResultPage(res: IResultPage): Promise<void> {
    if (!res) {
      this._toastService.warning('Нема резултата за задате параметре претраге!');
      await this._router.navigate(['/']);
    } else {
      this.resultPage = res;
      this.searchResult = res.content;
      this.pageOptions.currentPage = this.resultPage.number + 1;
      this.populateLocation();
      window.scroll(0, 0);
    }
  }

  public removeSelectedFilter(filterItem: ISelectedFilter) {
    if (!filterItem) {
      return;
    }
    switch (filterItem.type) {
      case EFilterType.AUTHOR: {
        this.resultedFilters.authors.find(f => f.filter.value === filterItem.item.value).filter.checked = false;
        const e = this.pageOptions.filters.authors.find(f => f.item.value === filterItem.item.value);
        const i = this.pageOptions.filters.authors.indexOf(e);
        if (i !== -1) {
          this.pageOptions.filters.authors.splice(i, 1);
        }
      }
                               break;
      case EFilterType.LOCATION: {
        this.resultedFilters.locations.find(f => f.filter.value === filterItem.item.value).filter.checked = false;
        const e = this.pageOptions.filters.locations.find(f => f.item.value === filterItem.item.value);
        const i = this.pageOptions.filters.locations.indexOf(e);
        if (i !== -1) {
          this.pageOptions.filters.locations.splice(i, 1);
        }
      }
                                 break;
      case EFilterType.LANGUAGE: {
        this.resultedFilters.languages.find(f => f.filter.value === filterItem.item.value).filter.checked = false;
        const e = this.pageOptions.filters.languages.find(f => f.item.value === filterItem.item.value);
        const i = this.pageOptions.filters.languages.indexOf(e);
        if (i !== -1) {
          this.pageOptions.filters.languages.splice(i, 1);
        }
      }
                                 break;
      case EFilterType.PUB_TYPE: {
        this.resultedFilters.pubTypes.find(f => f.filter.value === filterItem.item.value).filter.checked = false;
        const e = this.pageOptions.filters.pubTypes.find(f => f.item.value === filterItem.item.value);
        const i = this.pageOptions.filters.pubTypes.indexOf(e);
        if (i !== -1) {
          this.pageOptions.filters.pubTypes.splice(i, 1);
        }
      }                          break;
      case EFilterType.PUB_YEAR: {
        this.resultedFilters.pubYears.find(f => f.filter.value === filterItem.item.value).filter.checked = false;
        const e = this.pageOptions.filters.pubYears.find(f => f.item.value === filterItem.item.value);
        const i = this.pageOptions.filters.pubYears.indexOf(e);
        if (i !== -1) {
          this.pageOptions.filters.pubYears.splice(i, 1);
        }
      }                          break;
      case EFilterType.SUB_LOCATION: {
        this.resultedFilters.locations.forEach(l => {
          const sl = l.children.find(f => f.value === filterItem.item.value);
          if (sl) {
            sl.checked = false;
          }
        });
        const e = this.pageOptions.filters.subLocations.find(f => f.item.value === filterItem.item.value);
        const i = this.pageOptions.filters.subLocations.indexOf(e);
        if (i !== -1) {
          this.pageOptions.filters.subLocations.splice(i, 1);
        }
      }                              break;
      case EFilterType.SUBJECT: {
        this.resultedFilters.subjects.find(f => f.filter.value === filterItem.item.value).filter.checked = false;
        const e = this.pageOptions.filters.subjects.find(f => f.item.value === filterItem.item.value);
        const i = this.pageOptions.filters.subjects.indexOf(e);
        if (i !== -1) {
          this.pageOptions.filters.subjects.splice(i, 1);
        }
      }
                                break;
      default: return;
    }
    this.searchWithFilters();
  }

  private populateLocation() {
    const smString = JSON.stringify(this.searchModel);
    const optionsString = JSON.stringify(this.pageOptions);
    const uriChunk = `query=${smString}&pageOptions=${optionsString}`;
    const encoded = CryptoUtils.encryptData(uriChunk);
    this.searchPageUrl = `/${ResultPage.PagePath}s=${encoded}`;
    this._location.replaceState(this.searchPageUrl);
  }
}
