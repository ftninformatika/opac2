import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ISelectedFilter } from '../../../../models/search/filter.model';
import { ConfigState } from '../../../core/states/config/config.state';
import { Store } from '@ngxs/store';

@Component({
  selector: 'selected-filters',
  templateUrl: 'selected-filters.component.html',
  styleUrls: ['selected-filters.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectedFiltersComponent {
  @Input() selectedFilters: ISelectedFilter[];
  @Output() removeSelectedFilter = new EventEmitter<ISelectedFilter>();
  private readonly _store: Store;
  public showOthers = false;
  public kioskFilter: ISelectedFilter;

  public constructor(store: Store) {
    this._store = store;
    this.kioskFilter = this._store.selectSnapshot(ConfigState.getKioskSublocationAsFilter);
  }

  public removeFilter(f: ISelectedFilter) {
    if (this.kioskFilter && f.item.value === this.kioskFilter.item.value) {
      return;
    }
    const i = this.selectedFilters.indexOf(f);
    this.selectedFilters.splice(i, 1);
    this.removeSelectedFilter.emit(f);
  }
}
