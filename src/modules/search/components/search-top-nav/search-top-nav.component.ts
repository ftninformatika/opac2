import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'search-top-nav',
  templateUrl: 'search-top-nav.component.html',
  styleUrls: ['search-top-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchTopNavComponent {
  @Output() pageSizeChanged = new EventEmitter<number>();
  @Input() pageSize: number;

  public changePageSize(val: number) {
    this.pageSize = val;
    this.pageSizeChanged.emit(this.pageSize);
  }
}
