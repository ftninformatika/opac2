import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddToShelfAction } from '../../../core/states/user/user.state';

@Component({
  selector: 'items-availability-card',
  templateUrl: 'items-availability-card.component.html',
  styleUrls: ['items-availability-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsAvailabilityCardComponent {
  @Input() bookId: string;
  private readonly _store: Store;

  public constructor(store: Store) {
    this._store = store;
  }

  public addToShelf() {
    this._store.dispatch(new AddToShelfAction(this.bookId));
  }
}
