import {
  ChangeDetectionStrategy,
  Component, ElementRef,
  Input, OnDestroy,
  OnInit, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { ERecordItemStatus, RecordItem } from '../../../../models/book.model';
import { DomSanitizer } from '@angular/platform-browser';
import {AppOptionsState} from '../../../core/states/app-options/app-options.state';
import {Store} from '@ngxs/store';
import { ClearLocationFiltersAction } from '../../../core/states/app-options/app-options.actions';

@Component({
  selector: 'items-table',
  templateUrl: 'items-table.component.html',
  styleUrls: ['items-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsTableComponent implements OnInit, OnDestroy {
  @ViewChild('iframePlace', {static: false}) iframePlace: ElementRef;
  ItemStatus = ERecordItemStatus;
  @Input() items: RecordItem[];
  private readonly _domSanitizer;
  private readonly _store: Store;
  private sorted = false;
  public initialItems: RecordItem[];
  public tmpSearch: RecordItem[];
  public isSerial: boolean;
  public selectedLocation: string;
  public selectedLocMapURL: string;
  public selectedLocationFilters: {value: string; label: string}[];
  public selectedSubLocationFilters: {value: string; label: string}[];
  public allSelectedLocations: {value: string; label: string}[];
  public allAvailableLocations: {value: string; label: string}[];
  dropdownSettings = {};

  public constructor(domSanitizer: DomSanitizer, store: Store) {
    this._domSanitizer = domSanitizer;
    this.allAvailableLocations = [];
    this._store = store;
  }

  public ngOnInit(): void {
    this.initialItems = [...this.items];
    this.tmpSearch = [...this.items];
    this.isSerial = this.initialItems && this.initialItems[0].serial;
    if (this.items && this.items.length > 0) {
      this.items.forEach(l => {
        let el: { value: string; label: string };
        el = {
          value: l.locCode,
          label: l.location
        };
        if (l.status !== ERecordItemStatus.NotShowable && !this.allAvailableLocations.some(x => x.value === el.value)) {
          this.allAvailableLocations.push(el);
        }
      });
    }
    this.selectedLocationFilters = this._store.selectSnapshot(AppOptionsState.getSelectedLocationFilters)
      .filter(l => this.allAvailableLocations.some(x => x.value === l.item.value))
      .map(l => {
      let retVal: { value: string; label: string };
      retVal = {
        value: l.item.value,
        label: l.item.label
      };
      return retVal;
    });

    this.selectedSubLocationFilters = this._store.selectSnapshot(AppOptionsState.getSelectedSubLocationFilters)
      .filter(l => this.allAvailableLocations.some(x => x.value === l.item.value))
      .map(l => {
      let retVal: { value: string; label: string };
      retVal = {
        value: l.item.value,
        label: l.item.label
      };
      return retVal;
    });
    this.allSelectedLocations = [...this.selectedLocationFilters, ...this.selectedSubLocationFilters];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'value',
      textField: 'label',
      selectAllText: 'Одабери све',
      unSelectAllText: 'Поништи све',
      searchPlaceholderText: 'Филтрирај',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    if (this.allSelectedLocations.length === 0) {
      this.allSelectedLocations = [...this.allAvailableLocations];
    }
    this.filterBySelectedLocations();
  }

  public async ngOnDestroy() {
    await this._store.dispatch(new ClearLocationFiltersAction());
  }

  public filterBySelectedLocations() {
    this.tmpSearch = [];
    const items = [...this.initialItems];
    for (const sl of this.allSelectedLocations) {
      const el = items.find(i => i.location === sl.label);
      if (el) {
        this.tmpSearch.push(el);
      }
    }
    this.items = this.tmpSearch;
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
