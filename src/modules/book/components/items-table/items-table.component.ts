import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { ERecordItemStatus, RecordItem } from '../../../../models/book.model';
import { MdbTableDirective } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'items-table',
  templateUrl: 'items-table.component.html',
  styleUrls: ['items-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  ItemStatus = ERecordItemStatus;
  @Input() items: RecordItem[];
  public initialItems: RecordItem[];
  public searchTextChanged: Subject<string> = new Subject<string>();
  public isSerial: boolean;
  public selectedLocation: string;
  public searchText = '';

  constructor() {
    this.searchTextChanged.pipe(
      debounceTime(200),
      distinctUntilChanged()
    ).subscribe(() => {
      this.filterTable();
    });
  }

  public filterTable() {
    console.log(this.initialItems);
    if (!this.searchText || this.searchText === '') {
      this.items = {...this.initialItems};
      return;
    }
    this.items = this.items.filter(i => i.location.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1);
  }

  public ngOnInit() {
    this.initialItems = {...this.items};
    this.isSerial = this.initialItems && this.initialItems[0].serial;
    console.log(this.isSerial);
  }

  public ngAfterViewInit(): void {
  }

}
