import {
  ChangeDetectionStrategy,
  Component, ElementRef,
  Input, OnDestroy,
  OnInit, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { ERecordItemStatus, RecordItem } from '../../../../models/book.model';
import { Subject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import {AppOptionsState} from '../../../core/states/app-options/app-options.state';
import {ISelectedFilter} from '../../../../models/search/filter.model';
import {Store} from '@ngxs/store';
import { ClearLocationFiltersAction } from '../../../core/states/app-options/app-options.actions';
import { IDropdownSettings } from 'ng-multiselect-dropdown/multiselect.model';

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
  public searchTextChanged: Subject<string> = new Subject<string>();
  public isSerial: boolean;
  public selectedLocation: string;
  public selectedLocMapURL: string;
  public searchText = '';
  public selectedLocationFilters: {value: string; label: string}[];
  public selectedSubLocationFilters: {value: string; label: string}[];
  public allSelectedLocations: {value: string; label: string}[];
  public allAvailableLocations: {value: string; label: string}[];
  dropdownSettings = {};

  public constructor(domSanitizer: DomSanitizer, store: Store) {
    this._domSanitizer = domSanitizer;
    this.allAvailableLocations = [];
    this.searchTextChanged.pipe(
    ).subscribe(() => {
      this.filterTable();
    });
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
    this.filterBySelectedLocations();
  }

  public async ngOnDestroy() {
    await this._store.dispatch(new ClearLocationFiltersAction());
  }

  public onItemSelect(item: {value: string; label: string}) {
    // if (this.allSelectedLocations.findIndex(i => i.value === item.value) === -1) {
    //   this.allSelectedLocations.push(item);
    //
    // }
    console.log(this.allSelectedLocations);
    this.filterBySelectedLocations();
  }

  public onSelectAll() {
    // this.allSelectedLocations = [...this.allAvailableLocations];
    console.log(this.allSelectedLocations);
    this.filterBySelectedLocations();
  }

  public onDeSelect(itemCode: {value: string; label: string}) {
    const code = itemCode.value;
    if (!itemCode || this.allSelectedLocations.length === 0) {
      return;
    }
    console.log(this.allSelectedLocations);
    const index = this.allSelectedLocations.findIndex(i => i.value === code);
    // if (index > -1) {
      // this.allSelectedLocations.splice(index, 1);
    this.filterBySelectedLocations();
    // }
  }

  public filterBySelectedLocations() {
    this.tmpSearch = [];
    const items = [...this.initialItems];
    // if (this.allSelectedLocations && this.allSelectedLocations.length === 0) {
    //   this.items = [...this.initialItems];
    //   return;
    // }
    for (const sl of this.allSelectedLocations) {
      const el = items.find(i => i.location === sl.label);
      if (el) {
        this.tmpSearch.push(el);
      }
    }
    this.items = this.tmpSearch;
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
