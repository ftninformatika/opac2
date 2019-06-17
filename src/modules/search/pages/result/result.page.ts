import { BooksService } from '../../../core/services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';
import { Book } from '../../../core/models/book';
import { DEVICE_WIDTH_BREAKPOINTS } from '../../../home/components/collection-carousel/collection-carousel.component';
import { MDBModalRef } from 'ng-uikit-pro-standard';

export enum EDeviceWidth {
  GT_SM = 'gt_sm',
  LTE_SM = 'lte_sm'
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
  // public modalRef: MDBModalRef;

  public constructor(booksService: BooksService, activatedRoute: ActivatedRoute, router: Router/*, modalRef: MDBModalRef*/) {
    this._booksService = booksService;
    this._activatedRoute = activatedRoute;
    this._router = router;
    // this.modalRef = modalRef;
  }

  public ngOnInit() {
    this._activatedRoute.queryParamMap.subscribe(
      params => {
        const query = JSON.parse(params.get('query'));
        this._booksService.search(query).subscribe(data => {
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
