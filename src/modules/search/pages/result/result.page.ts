import { Component, HostListener, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { IResultPageOptions } from '../../../../models/search/result-page-options.model';
import { EFilterType } from '../../components/search-filters/search-filters.component';
import { IFilterItem, IFiltersRes } from '../../../../models/search/filter.model';
import { SearchService } from '../../../core/services/search.service';
import { ISearchModel } from '../../../../models/search/search.model';
import { BooksService } from '../../../core/services/books.service';
import { IResultPage } from '../../../../models/page.model';
import { ArrayUtils } from '../../../../utils/array.utils';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../../../models/book.model';
import { ToastService } from 'ng-uikit-pro-standard';
import { Location } from '@angular/common';

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

  private readonly _booksService: BooksService;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _searchService: SearchService;
  private readonly _router: Router;
  private readonly _toastService: ToastService;
  private readonly _location: Location;

  public searchModel: ISearchModel;
  public resultPage: IResultPage;
  public searchResult: Book[];
  public deviceWidth = EDeviceWidth.GT_SM;
  public pageOptions: IResultPageOptions;
  public resultedFilters: IFiltersRes;
  public selectedFilters: {item: IFilterItem, type: EFilterType}[];
  public filtersLoaded: boolean;

  public constructor(booksService: BooksService, activatedRoute: ActivatedRoute,
                     router: Router, toastService: ToastService, location: Location, searchService: SearchService) {
    this._booksService = booksService;
    this._activatedRoute = activatedRoute;
    this._router = router;
    this._toastService = toastService;
    this._location = location;
    this._searchService = searchService;
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

  public ngOnInit() {
    this._activatedRoute.queryParamMap.subscribe(
      params => {
        this.pageOptions = JSON.parse(params.get('pageOptions'));
        this.searchModel = JSON.parse(params.get('query'));
        if (this.searchModel === null) {
          this._router.navigate(['/']);
        }
        if (this.pageOptions && this.pageOptions.currentPage) {
          this.onPageChange(this.pageOptions.currentPage);
        }
        this.searchWithFilters();
    });
    this.onWindowResize();
  }

  public ngOnDestroy() {
    this.searchModel = null;
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

  public filterResults(filterItem: {item: IFilterItem, type: EFilterType}) {
    this.addRemoveSelectedFilters(filterItem);
    switch (filterItem.type) {
      case EFilterType.LOCATION: ArrayUtils.pushOrRemoveFromArr(filterItem.item.value, this.pageOptions.filters.locations); break;
      case EFilterType.PUB_TYPE: ArrayUtils.pushOrRemoveFromArr(filterItem.item.value, this.pageOptions.filters.pubTypes); break;
      case EFilterType.AUTHOR: ArrayUtils.pushOrRemoveFromArr(filterItem.item.value, this.pageOptions.filters.authors); break;
      case EFilterType.LANGUAGE: ArrayUtils.pushOrRemoveFromArr(filterItem.item.value, this.pageOptions.filters.languages); break;
      case EFilterType.PUB_YEAR: ArrayUtils.pushOrRemoveFromArr(filterItem.item.value, this.pageOptions.filters.pubYears); break;
      case EFilterType.SUB_LOCATION: ArrayUtils.pushOrRemoveFromArr(filterItem.item.value, this.pageOptions.filters.subLocations); break;
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
  // TODO: debug and solve this
  private addRemoveSelectedFilters(filterItem: {item: IFilterItem, type: EFilterType}) {
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
            this.populateSelectedFilters(this.resultedFilters);
          });
      },
      () => this._router.navigate(['/'])
    );
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

  private populateSelectedFilters(filters: IFiltersRes) {
    filters.locations.filter(l => l.filter.checked).map(l => {
      return {
        item: l.filter,
        type: EFilterType.LOCATION
      };
    })
      .forEach(l => this.addRemoveSelectedFilters(l));
  }

  private populateLocation() {
    const smString = JSON.stringify(this.searchModel);
    const optionsString = JSON.stringify(this.pageOptions);
    // This is used to change route params in order to enable link share on specific page, size...
    this._location.replaceState(
      `/search/result?query=${smString}&pageOptions=${optionsString}`);
  }
}
