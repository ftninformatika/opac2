import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { IFilter } from '../../../../models/search/filter.model';

@Component({
  selector: 'list-of-filters',
  templateUrl: 'list-of-filters.component.html',
  styleUrls: ['list-of-filters.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListOfFiltersComponent implements OnChanges {
  @Input() filters: IFilter[];
  public loaded: boolean;

  public constructor() {
    this.loaded = true;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.loaded = true;
  }
}
