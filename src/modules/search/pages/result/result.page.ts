import { BooksService } from '../../../core/services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';
import { Book } from '../../../../models/book';

export enum EDeviceWidth {
  GT_SM = 'gt_sm',
  LTE_SM = 'lte_sm',
  LTE_XM = 'lte_xsm'
}

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss']
})
export class ResultPage implements OnInit {

  private readonly _booksService: BooksService;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _router: Router;
  public searchResult: Book[];
  public deviceWidth = EDeviceWidth.GT_SM;

  public constructor(booksService: BooksService, activatedRoute: ActivatedRoute, router: Router) {
    this._booksService = booksService;
    this._activatedRoute = activatedRoute;
    this._router = router;
  }

  public ngOnInit() {
    this._activatedRoute.queryParamMap.subscribe(
      params => {
        const query = JSON.parse(params.get('query'));
        this._booksService.getAllBooks().subscribe(data => {
          this.searchResult = data;
        });
    });
    this.onWindowResize();
  }

  @HostListener('window:resize')
  public onWindowResize() {
    if (window.innerWidth >= 768) { this.deviceWidth = EDeviceWidth.GT_SM; } else { this.deviceWidth = EDeviceWidth.LTE_SM; }
  }
}
