// tslint:disable-next-line:max-line-length
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { IFilter, IFilterItem, ISelectedFilter } from '../../../../models/search/filter.model';
import { EFilterType } from '../search-filters/search-filters.component';
import { ConfigState } from '../../../core/states/config/config.state';
import { Store } from '@ngxs/store';

@Component({
  selector: 'list-of-filters',
  templateUrl: 'list-of-filters.component.html',
  styleUrls: ['list-of-filters.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListOfFiltersComponent implements OnChanges {
  @Input() filters: IFilter[];
  @Input() type: EFilterType;
  @Output() filterChosen = new EventEmitter<ISelectedFilter>();
  private readonly _store: Store;
  public kioskFilter: ISelectedFilter;
  public loaded: boolean;

  public constructor(store: Store) {
    this._store = store;
    this.loaded = true;
    this.kioskFilter = this._store.selectSnapshot(ConfigState.getKioskSublocationAsFilter);
  }

  public onChoseFilter(chosenItem: IFilterItem, activeType: EFilterType) {
    if (this.kioskFilter && chosenItem.value === this.kioskFilter.item.value && activeType === EFilterType.SUB_LOCATION) {
      return;
    }
    this.filterChosen.emit({item: chosenItem, type: activeType});
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.loaded = true;
  }
}
