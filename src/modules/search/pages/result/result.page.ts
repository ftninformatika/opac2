import { BooksService } from '../../../core/services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, HostListener, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Book } from '../../../../models/book.model';
import { ISearchModel, ISearchModelInitial } from '../../../../models/search/search.model';
import { ToastService } from 'ng-uikit-pro-standard';
import { IResultPage } from '../../../../models/page.model';
import { Location } from '@angular/common';
import { IResultPageOptions } from '../../../../models/search/result-page-options.model';
import { SearchService } from '../../../core/services/search.service';
import { IFilterItem, IFiltersRes } from '../../../../models/search/filter.model';
import { EFilterType } from '../../components/search-filters/search-filters.component';

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

  public constructor(booksService: BooksService, activatedRoute: ActivatedRoute,
                     router: Router, toastService: ToastService, location: Location, searchService: SearchService) {
    this._booksService = booksService;
    this._activatedRoute = activatedRoute;
    this._router = router;
    this._toastService = toastService;
    this._location = location;
    this._searchService = searchService;
    this.searchModel = null;
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
        this._booksService.search(this.searchModel).subscribe(
          (res: IResultPage) => {
            this.populateResultPage(res);
            this._searchService.getFilters({searchModel: this.searchModel, options: this.pageOptions})
              .subscribe(a => {
                this.resultedFilters = a;
                // this.pageOptions.filters = a;
              });
            },
          () => this._router.navigate(['/'])
        );
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
    this._booksService.search(this.searchModel, $event - 1, this.pageOptions.pageSize).subscribe(
      (res: IResultPage) => this.populateResultPage(res),
      () => this._router.navigate(['/'])
    );
  }

  public filterResults(filterItem: {item: IFilterItem, type: EFilterType}) {
    console.log(filterItem);
    switch (filterItem.type) {
      case EFilterType.LOCATION: this.pageOptions.filters.locations.push(filterItem.item.value); break;
      case EFilterType.PUB_TYPE: this.pageOptions.filters.pubTypes.push(filterItem.item.value); break;
      case EFilterType.AUTHOR: this.pageOptions.filters.authors.push(filterItem.item.value); break;
      case EFilterType.LANGUAGE: this.pageOptions.filters.languages.push(filterItem.item.value); break;
      case EFilterType.PUB_YEAR: this.pageOptions.filters.pubYears.push(filterItem.item.value); break;
    }
  }

  public onPageSizeChange(size: any) {
    if (size < 0) {
      return;
    }
    this.pageOptions.pageSize = parseInt(size, 10);
    this._booksService.search(this.searchModel, this.pageOptions.currentPage - 1, this.pageOptions.pageSize).subscribe(
      (res: IResultPage) => this.populateResultPage(res),
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
      const smString = JSON.stringify(this.searchModel);
      const optionsString = JSON.stringify(this.pageOptions);
      // This is used to change route params in order to enable link share on specific page, size...
      this._location.replaceState(
        `/search/result?query=${smString}&pageOptions=${optionsString}`);
      window.scroll(0, 0);
    }
  }
}
