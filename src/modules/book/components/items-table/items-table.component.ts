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
import {AppOptionsState} from '../../../core/states/app-options/app-options.state';
import {ISelectedFilter} from '../../../../models/search/filter.model';
import {Store} from '@ngxs/store';

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
  private readonly _store: Store;
  private sorted = false;
  public initialItems: RecordItem[];
  public tmpSearch: RecordItem[];
  public searchTextChanged: Subject<string> = new Subject<string>();
  public isSerial: boolean;
  public selectedLocation: string;
  public selectedLocMapURL: string;
  public searchText = '';
  public selectedLocationFilters: ISelectedFilter[];
  public selectedSubLocationFilters: ISelectedFilter[];
  public allAvailableLocations: ISelectedFilter[];

  public constructor(domSanitizer: DomSanitizer, store: Store) {
    this._domSanitizer = domSanitizer;
    this.searchTextChanged.pipe(
    ).subscribe(() => {
      this.filterTable();
    });
    this._store = store;
    this.selectedLocationFilters = this._store.selectSnapshot(AppOptionsState.getSelectedLocationFilters);
    this.selectedSubLocationFilters = this._store.selectSnapshot(AppOptionsState.getSelectedSubLocationFilters);
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
    if (!this.selectedLocMapURL || this.selectedLocMapURL === '') {
      return;
    }
    return this._domSanitizer.bypassSecurityTrustResourceUrl(this.selectedLocMapURL);
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
