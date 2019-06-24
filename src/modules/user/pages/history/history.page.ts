import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../core/services/books.service';
import { ILendingViewModel } from '../../../core/models/circ/lending/lending-view.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss']
})
export class HistoryPage implements OnInit {

  private readonly _booksService: BooksService;
  private sorted = false;
  public allLendings: ILendingViewModel[];

  public constructor(booksService: BooksService) {
    this._booksService = booksService;
  }

  public ngOnInit() {
    this.allLendings = this._booksService.getDummyLendingViews();
  }

  public sortBy(by: string | any): void {

    this.allLendings.sort((a: any, b: any) => {
      if (a[by] < b[by]) {
        return this.sorted ? 1 : -1;
      }
      if (a[by] > b[by]) {
        return this.sorted ? -1 : 1;
      }

      return 0;
    });

    this.sorted = !this.sorted;
  }
}
