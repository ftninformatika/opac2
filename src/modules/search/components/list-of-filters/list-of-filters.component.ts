import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import { IFilter, IFilterItem } from '../../../../models/search/filter.model';
import { EFilterType } from '../search-filters/search-filters.component';

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
  @Output() filterChosen = new EventEmitter<{item: IFilterItem, type: EFilterType}>();
  public loaded: boolean;

  public constructor() {
    this.loaded = true;
  }

  public onChoseFilter(chosenItem: IFilterItem, activeType: EFilterType) {
    this.filterChosen.emit({item: chosenItem, type: activeType});
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.loaded = true;
  }
}
