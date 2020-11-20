import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UsersService} from "../../../core/services/users.service";
import {Reservation} from "../../../../models/book.model";
import {ConfigState} from "../../../core/states/config/config.state";
import {Store} from "@ngxs/store";
import {ToastService} from "ng-uikit-pro-standard";

@Component({
  selector: 'app-active-reservations',
  templateUrl: './active-reservations.page.html',
  styleUrls: ['./active-reservations.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ActiveReservationsPage implements OnInit {

  private readonly _userService: UsersService;
  private readonly _store: Store;
  private readonly _toastService: ToastService;

  public reservations: Reservation[];
  public lib: string;
  private sorted = false;
  public noReservations = false;

  constructor(userService: UsersService, store: Store, toastService: ToastService) {
    this._userService = userService;
    this._store = store;
    this._toastService = toastService;
    this.lib = this._store.selectSnapshot(ConfigState.library);
    this.reservations = [];
  }

  ngOnInit() {
    this.loadActiveReservations();
  }

  public loadActiveReservations() {
    this._userService.getActiveReservations().subscribe(
      reservations => {
        this.reservations = reservations;
        this.noReservations = this.reservations.length === 0;
      }
    );
  }

  public deleteReservation(reservation: Reservation) {
    const options = {closeButton: true, tapToDismiss: true, positionClass: 'md-toast-top-center'};

    this._userService.deleteReservation(reservation._id).subscribe(
      deleted => {
        if (!deleted) {
          this._toastService.warning('Дошло је до грешке, резервација није избрисана!', '', options);
        } else {
          this.reservations.splice(this.reservations.indexOf(reservation), 1);
          this.noReservations = this.reservations.length === 0;
        }
      },
      () => this._toastService.warning('Дошло је до грешке, резервација није избрисана!', '', options)
    );
  }


  public sortBy(by: string | any): void {
    this.reservations.sort((a: any, b: any) => {
      const a1 = {...a};
      const b1 = {...b};
      if (by === 'reservationDate') {
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

  private transformDate(localizedDate: string): string {
    if (!localizedDate || localizedDate === '') {
      return '99999999';
    }
    return localizedDate.split('.').reverse().join('');
  }
}
