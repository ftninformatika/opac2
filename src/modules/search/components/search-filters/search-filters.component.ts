import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IResultPageFilterRequest } from '../../../../models/search/result-page-options.model';
import { IFilter, IFilterItem, IFiltersRes } from '../../../../models/search/filter.model';
import { SearchService } from '../../../core/services/search.service';
import { FormBuilder, FormGroup } from '@angular/forms';

export enum EFilterType {
  LOCATION = 0,
  PUB_TYPE = 1,
  AUTHOR = 2,
  LANGUAGE = 3,
  PUB_YEAR = 4
}

@Component({
  selector: 'search-filters',
  templateUrl: 'search-filters.component.html',
  styleUrls: ['search-filters.component.scss']
})
export class SearchFiltersComponent implements OnChanges {
  @Input() searchFilterReq: IResultPageFilterRequest;
  @Input() filters: IFiltersRes;
  @Output() filterSelected = new EventEmitter<{item: IFilterItem, type: EFilterType}>();
  private readonly _searchService: SearchService;
  public formBuilder: FormBuilder;
  public authorsForm: FormGroup;
  public pubTypeForm: FormGroup;
  public languageForm: FormGroup;
  public locationForm: FormGroup;
  public pubYearForm: FormGroup;
  public subLocationsExist: boolean;
  public filtersLoaded: boolean;
  public filtersMoreLabel: string;
  public filtersToExpand: IFilter[];

  public constructor(formBuilder: FormBuilder, searchService: SearchService) {
    this._searchService = searchService;
    this.formBuilder = formBuilder;
    this.subLocationsExist = false;
    this.filtersLoaded = false;
    this.filtersMoreLabel = '';
    this.filtersToExpand = null;
    this.filters = null;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.filters === null || this.filters.locations == null || this.filters.pubTypes == null ||
      this.filters.authors == null || this.filters.pubYears == null || this.filters.languages == null) {
      return;
    }
    this.subLocationsExist = this.filters.locations.some(l => l.children !== null);
    this.populateForms();
    this.filtersLoaded = true;
  }

  public moreFilters(filters: IFilter[], label: string) {
    if (!filters || filters.length === 0 || !label || label === '') {
      return;
    }
    this.filtersMoreLabel = label;
    this.filtersToExpand = filters;
  }

  public selectionChanged(filterItem: IFilterItem, filterType: EFilterType): void {
    console.log(filterItem, filterType);
    this.filterSelected.emit({item: filterItem, type: filterType});
  }

  private populateForms(): void {
    this.locationForm = this.formBuilder.group(this.filterArrayToFormObj(this.filters.locations));
    this.authorsForm = this.formBuilder.group(this.filterArrayToFormObj(this.filters.authors));
    this.pubTypeForm = this.formBuilder.group(this.filterArrayToFormObj(this.filters.pubTypes));
    this.languageForm = this.formBuilder.group(this.filterArrayToFormObj(this.filters.languages));
    this.pubYearForm = this.formBuilder.group(this.filterArrayToFormObj(this.filters.pubYears));
  }

  private filterArrayToFormObj(fiArr: IFilter[]): any {
    const retVal = {
      disabled: undefined
    };
    fiArr.map(e => e.filter).forEach(e => {retVal[e.value] = e.checked; retVal.disabled = !e.checked; });
    return retVal;
  }

}

