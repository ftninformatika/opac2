import { BooksService } from '../../../core/services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { Book } from '../../../../models/book.model';
import { ISearchModel } from '../../../../models/search/search.model';
import { ToastService } from 'ng-uikit-pro-standard';
import { IResultPage } from '../../../../models/page.model';

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
export class ResultPage implements OnInit {

  private readonly _booksService: BooksService;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _router: Router;
  private readonly _toastService: ToastService;
  public searchModel: ISearchModel;
  public resultPage: IResultPage;
  public searchResult: Book[];
  public deviceWidth = EDeviceWidth.GT_SM;
  public currentPage: number;
  public pageSize: number;

  public constructor(booksService: BooksService, activatedRoute: ActivatedRoute, router: Router, toastService: ToastService) {
    this._booksService = booksService;
    this._activatedRoute = activatedRoute;
    this._router = router;
    this._toastService = toastService;
    this.searchModel = null;
    this.currentPage = 1; // Pagination from 1, backend pagination is from 0
    this.pageSize = 10;
  }

  public ngOnInit() {
    this._activatedRoute.queryParamMap.subscribe(
      params => {
        this.searchModel = JSON.parse(params.get('query'));
        if (this.searchModel === null) {
          this._router.navigate(['/']);
        }
        // this._booksService.getAllBooks().subscribe(data => {
        //   this.searchResult = data;
        // });
        this._booksService.search(this.searchModel).subscribe(
          (res: IResultPage) => this.populateResultPage(res),
          () => this._router.navigate(['/'])
        );
    });
    this.onWindowResize();
  }

  @HostListener('window:resize')
  public onWindowResize() {
    if (window.innerWidth >= 768) { this.deviceWidth = EDeviceWidth.GT_SM; } else { this.deviceWidth = EDeviceWidth.LTE_SM; }
  }

  public onPageChange($event: number) {
    if ($event < 1) {
      return;
    }
    this._booksService.search(this.searchModel, $event - 1, this.pageSize).subscribe(
      (res: IResultPage) => this.populateResultPage(res),
      () => this._router.navigate(['/'])
    );
  }

  public onPageSizeChange(size: number) {
    if (size < 0) {
      return;
    }
    this.pageSize = size;
    this._booksService.search(this.searchModel, this.currentPage - 1, this.pageSize).subscribe(
      (res: IResultPage) => this.populateResultPage(res),
      () => this._router.navigate(['/'])
    );
  }

  private populateResultPage(res: IResultPage): void {
    if (!res) {
      this._toastService.warning('Нема резултата за задате параметре претраге!');
      this._router.navigate(['/']);
    } else {
      this.resultPage = res;
      this.searchResult = res.content;
      this.currentPage = this.resultPage.number + 1;
    }
  }
}
