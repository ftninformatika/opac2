import {IUserCategoryModel} from '../../../../models/circ/user-category.model';
import {ConfigState} from '../../../core/states/config/config.state';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BooksService} from '../../../core/services/books.service';
import {UsersService} from '../../../core/services/users.service';
import {UserState} from '../../../core/states/user/user.state';
import {Report} from '../../../../models/report.model';
import {ToastService} from 'ng-uikit-pro-standard';
import {Store} from '@ngxs/store';

@Component({
  selector: 'active-lendings-page',
  templateUrl: 'active-lendings.page.html',
  styleUrls: ['active-lendings.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ActiveLendingsPage implements OnInit {
  // static dateFormat = 'dd.MM.yyyy';
  private readonly _booksService: BooksService;
  private readonly _userService: UsersService;
  private readonly _store: Store;
  private readonly _toastService: ToastService;
  private sorted = false;
  public userCategory: IUserCategoryModel;
  public memberNo: string;
  public memberUsername: string;
  public lendingsReport: Report[];
  public lib: string;

  public constructor(booksService: BooksService, userService: UsersService, store: Store, toastService: ToastService) {
    this._booksService = booksService;
    this._userService = userService;
    this._store = store;
    this._toastService = toastService;
    this.memberNo = this._store.selectSnapshot(UserState.memberNo);
    this.memberUsername = this._store.selectSnapshot(UserState.username);
    this.lib = this._store.selectSnapshot(ConfigState.library);
    this.userCategory = this._store.selectSnapshot(UserState.userCategory);
  }

  public ngOnInit() {
    this.loadLendings();
  }

  public sortBy(by: string | any): void {
    this.lendingsReport.sort((a: any, b: any) => {
      const a1 = {...a};
      const b1 = {...b};
      if (by === 'property1' || by === 'property2') {
        a1[by] = this.transformDate(a[by]);
        b1[by] = this.transformDate(b[by]);
      }
      if (a1[by] < b1[by]) {
        return this.sorted ? 1 : -1;
      }
      if (a1[by] > b1[by]) {
        return this.sorted ? -1 : 1;
      }
      return 0;
    });
    this.sorted = !this.sorted;
  }

  public prolongLending(lendingId: string) {
    if (!lendingId) {
      return;
    }
    this._userService.prolongLending({email: this.memberUsername, lendingId: lendingId}).subscribe(
      resp => {
        if (!resp.prolongable) {
          if (resp.message != null && resp.message != "") {
            this._toastService.warning(resp.message);
          } else {
            this._toastService.warning('Није могуће продужити задужење');
          }
        } else {
          this._toastService.success('Успешно сте продужили задужење');
        }
        this.loadLendings();
      },
      () =>
        this._toastService.warning('Није могуће продужити позајмицу')
    );
  }

  public checkMaxPeriodExpired(lendDateString: string) {
    if (!lendDateString || !this.userCategory) {
      return;
    }
    const parts = lendDateString.split('.');
    const maxDate = new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
    this.addDays(maxDate, (this.userCategory.maxPeriod));

    return maxDate < new Date();
  }

  private addDays(date: Date, days: number): Date {
    const d = new Date(date);
    date.setDate(d.getDate() + days);
    return date;
  }

  private loadLendings() {
    this._userService.getActiveMemberLendings(this.memberNo).subscribe(
      resp => {
        if (!resp || resp.length === 0) {
          return;
        }
        for (const r of resp) {
          r.maxDatePassed = this.checkMaxPeriodExpired(r.property1);
        }
        this.lendingsReport = resp;
      }
    );
  }

  private transformDate(localizedDate: string): string {
    if (!localizedDate || localizedDate === '') {
      return '99999999';
    }
    return localizedDate.split('.').reverse().join('');
  }
}
