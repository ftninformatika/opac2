import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BooksService } from '../../../core/services/books.service';
import { ILendingViewModel } from '../../../../models/circ/lending/lending-view.model';
import { UsersService } from '../../../core/services/users.service';
import { Store } from '@ngxs/store';
import { UserState } from '../../../core/states/user/user.state';
import { Report } from '../../../../models/report.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HistoryPage implements OnInit {
  private readonly _booksService: BooksService;
  private readonly _userService: UsersService;
  private readonly _store: Store;
  private sorted = false;
  public allLendings: ILendingViewModel[];
  public memberNo: string;
  public lendingsReport: Report[];

  public constructor(booksService: BooksService, userService: UsersService, store: Store) {
    this._booksService = booksService;
    this._userService = userService;
    this._store = store;
    this.memberNo = this._store.selectSnapshot(UserState.memberNo);
  }

  public ngOnInit() {
    this.allLendings = this._booksService.getDummyLendingViews();
    this._userService.getMemberLendingHistory(this.memberNo).subscribe(
      resp => {
        this.lendingsReport = resp;
      }
    );
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
