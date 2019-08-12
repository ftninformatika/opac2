import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ISelectedFilter } from '../../../../models/search/filter.model';

@Component({
  selector: 'selected-filters',
  templateUrl: 'selected-filters.component.html',
  styleUrls: ['selected-filters.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectedFiltersComponent {
  @Input() selectedFilters: ISelectedFilter[];
  @Output() removeSelectedFilter = new EventEmitter<ISelectedFilter>();
  public showOthers = false;

  public removeFilter(f: ISelectedFilter) {
    const i = this.selectedFilters.indexOf(f);
    this.selectedFilters.splice(i, 1);
    this.removeSelectedFilter.emit(f);
  }
}
