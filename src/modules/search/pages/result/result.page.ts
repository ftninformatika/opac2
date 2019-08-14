import { Component, HostListener, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { IResultPageOptions } from '../../../../models/search/result-page-options.model';
import { EFilterType } from '../../components/search-filters/search-filters.component';
import { IFiltersRes, ISelectedFilter } from '../../../../models/search/filter.model';
import { ConfigState } from '../../../core/states/config/config.state';
import { SearchService } from '../../../core/services/search.service';
import { ISearchModel } from '../../../../models/search/search.model';
import { BooksService } from '../../../core/services/books.service';
import { CryptoUtils } from '../../../../utils/crypto.utils';
import { IResultPage } from '../../../../models/page.model';
import { ArrayUtils } from '../../../../utils/array.utils';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../../../models/book.model';
import { ToastService } from 'ng-uikit-pro-standard';
import { Location } from '@angular/common';
import { Store } from '@ngxs/store';
import { SearchUtil } from '../../../../utils/animations/search-util';

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
  private readonly _booksService: BooksService;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _searchService: SearchService;
  private readonly _router: Router;
  private readonly _toastService: ToastService;
  private readonly _location: Location;
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


  public constructor(booksService: BooksService, activatedRoute: ActivatedRoute,
                     router: Router, toastService: ToastService, location: Location, searchService: SearchService, store: Store) {
    this._booksService = booksService;
    this._activatedRoute = activatedRoute;
    this._router = router;
    this._toastService = toastService;
    this._location = location;
    this._searchService = searchService;
    this._store = store;
    this.initValues();
  }

  public ngOnInit() {
    this._activatedRoute.queryParamMap.subscribe(
      params => {
        try {
          const hashString = params.get('s');
          const decryptedString = CryptoUtils.decryptData(hashString);
          const paramsChunks = decryptedString.split('&');
          const queryChunk = paramsChunks[0].split('=')[1];
          const pageOptionsCh = paramsChunks[1].split('=')[1];
          this.pageOptions = JSON.parse(pageOptionsCh);
          this.searchModel = JSON.parse(queryChunk);
          this.searchPageUrl = `${ResultPage.PagePath}s=${hashString}`;
        } catch (e) {
          console.error(e.toString());
          this._router.navigate(['/']);
          return;
        }
        if (this.searchModel === null || this.pageOptions === null) {
          this._router.navigate(['/']);
          return;
        }
        if (this.pageOptions.lib && this.pageOptions.lib !== this.lib) {
          this._router.navigate([`/${this.pageOptions.lib}`], {state: {proceedUrl : this.searchPageUrl}});
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
          (res: IResultPage) => {
            this.populateResultPage(res);
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
      pubTypes: null
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
      (res: IResultPage) => {
        this.populateResultPage(res);
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
  }

  public modifySearch() {
    this._router.navigate(['/search'], {state: this.searchModel});
  }

  private populateResultPage(res: IResultPage): void {
    if (!res) {
      this._toastService.warning('Нема резултата за задате параметре претраге!');
      this._router.navigate(['/']);
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
