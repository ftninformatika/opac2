import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { IFilterItem } from '../../../../models/search/filter.model';
import { EFilterType } from '../search-filters/search-filters.component';

@Component({
  selector: 'selected-filters',
  templateUrl: 'selected-filters.component.html',
  styleUrls: ['selected-filters.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectedFiltersComponent {
  @Input() selectedFilters: {item: IFilterItem, type: EFilterType}[];
  @Output() removeSelectedFilter = new EventEmitter<{item: IFilterItem, type: EFilterType}>();

  public removeFilter(f: {item: IFilterItem, type: EFilterType}) {
    const i = this.selectedFilters.indexOf(f);
    this.selectedFilters.splice(i, 1);
    this.removeSelectedFilter.emit(f);
  }
}
