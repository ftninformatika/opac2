import { ChangeDetectionStrategy, Component, HostListener, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ERecordItemStatus, RecordItem } from '../../../../models/book.model';
import { MdbTableDirective } from 'ng-uikit-pro-standard';

@Component({
  selector: 'items-table',
  templateUrl: 'items-table.component.html',
  styleUrls: ['items-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsTableComponent implements OnInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  ItemStatus = ERecordItemStatus;
  @Input() items: RecordItem[];
  public selectedLocation: string;
  public searchText = '';
  public previous: string;
  public elements: any = [];
  public headElements = ['Локација', 'Сигнатура', 'Инвентарни број'];

  constructor() { }

  @HostListener('input') oninput() {
    this.searchItems();
  }

  public ngOnInit() {
    // for (let i = 1; i <= 10; i++) {
    //   this.elements.push({ id: i.toString(), first: 'Wpis ' + i, last: 'Last ' + i, handle: 'Handle ' + i });
    // }

    this.mdbTable.setDataSource(this.items);
    this.previous = this.mdbTable.getDataSource();
  }

  searchItems() {
    const prev = this.mdbTable.getDataSource();

    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.elements = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.elements = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(prev);
    }
  }
}
