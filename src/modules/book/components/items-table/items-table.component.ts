import {
  ChangeDetectionStrategy,
  Component, ElementRef,
  Input,
  OnInit, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { ERecordItemStatus, RecordItem } from '../../../../models/book.model';
import { Subject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'items-table',
  templateUrl: 'items-table.component.html',
  styleUrls: ['items-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsTableComponent implements OnInit {
  @ViewChild('iframePlace', {static: false}) iframePlace: ElementRef;
  ItemStatus = ERecordItemStatus;
  @Input() items: RecordItem[];
  private readonly _domSanitizer;
  public initialItems: RecordItem[];
  public tmpSearch: RecordItem[];
  public searchTextChanged: Subject<string> = new Subject<string>();
  public isSerial: boolean;
  public selectedLocation: string;
  public selectedLocMapURL: string;
  public searchText = '';
  private sorted = false;

  public constructor(domSanitizer: DomSanitizer) {
    this._domSanitizer = domSanitizer;
    this.searchTextChanged.pipe(
    ).subscribe(() => {
      this.filterTable();
    });
  }

  public filterTable() {
    if (!this.searchText || this.searchText === '') {
      this.items = [...this.initialItems];
      return;
    }
    this.tmpSearch = [...this.initialItems];
    this.tmpSearch = this.tmpSearch.filter(
      o => {
        return Object.keys(o).some(k => {
          if (!o[k]) {
            return false;
          }
          return o[k].toString().toLowerCase().indexOf(this.searchText.toLowerCase()) > -1;
        });
      }
    );
    this.items = this.tmpSearch;
  }

  public ngOnInit() {
    this.initialItems = [...this.items];
    this.tmpSearch = [...this.items];
    this.isSerial = this.initialItems && this.initialItems[0].serial;
  }

  public changeSelectedLocation(i: RecordItem): boolean {
    this.selectedLocation = i.location;
    this.selectedLocMapURL = i.googleMapLocationURL;
    return (this.selectedLocMapURL && this.selectedLocMapURL !== '' && this.selectedLocation && this.selectedLocation !== '');
  }

  public getSanitizedURL(): string {
    const sanitizedURL = this._domSanitizer.bypassSecurityTrustResourceUrl(this.selectedLocMapURL);
    // console.log(this.iframePlace);
    // console.log(i.googleMapLocationURL);
    return sanitizedURL;
  }

  public sortBy(by: string | any): void {
    this.items.sort((a: any, b: any) => {
      const a1 = {...a};
      const b1 = {...b};
      if (a1[by] < b1[by]) {
        return this.sorted ? 1 : -1;
      }
      if (a1[by] > b1[by]) {
        return this.sorted ? -1 : 1;
      }
      return 0;
    });
    this.sorted = !this.sorted;
  }
}
