import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ESortType, ISort } from '../../../../models/search/sort.model';

@Component({
  selector: 'search-top-nav',
  templateUrl: 'search-top-nav.component.html',
  styleUrls: ['search-top-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchTopNavComponent implements OnChanges {
  @Output() pageSizeChanged = new EventEmitter<number>();
  @Input() pageSize: number;

  @Output() sortChanged = new EventEmitter<ISort>();
  @Input() sort: ISort;
  public sortTitle: string;

  private SortType = ESortType;

  public onChangePageSize(val: number) {
    this.pageSize = val;
    this.pageSizeChanged.emit(this.pageSize);
  }

  public onSortChange(typeV: ESortType, ascendingV: boolean) {
    this.sortChanged.emit({type: typeV, ascending: ascendingV});
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.sortTitle = this.getSortTitle();
  }

  public getSortTitle() {
    let retVal = '';
    switch (this.sort.type) {
      case ESortType.SORT_AUTHOR: retVal = 'Аутор'; break;
      case ESortType.SORT_PUBLISHER: retVal = 'Издавач'; break;
      case ESortType.SORT_YEAR: retVal = 'Година'; break;
      case ESortType.SORT_TITLE: retVal = 'Наслов'; break;
      default: return '';
    }
    return retVal;
  }

}
