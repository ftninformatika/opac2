import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {IResultPageSearchRequest} from '../../../../models/search/result-page-options.model';
import {IFilter, IFilterItem, IFiltersRes, ISelectedFilter} from '../../../../models/search/filter.model';
import {SearchService} from '../../../core/services/search.service';
import {FormBuilder, FormGroup} from '@angular/forms';

export enum EFilterType {
  LOCATION = 0,
  PUB_TYPE = 1,
  AUTHOR = 2,
  LANGUAGE = 3,
  PUB_YEAR = 4,
  SUB_LOCATION = 5,
  SUBJECT = 6
}

@Component({
  selector: 'search-filters',
  templateUrl: 'search-filters.component.html',
  styleUrls: ['search-filters.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchFiltersComponent implements OnChanges {
  @Input() searchFilterReq: IResultPageSearchRequest;
  @Input() filters: IFiltersRes;
  @Input() filtersLoaded: boolean;
  @Output() filterSelected = new EventEmitter<ISelectedFilter>();
  private readonly _searchService: SearchService;

  public formBuilder: FormBuilder;
  public authorsForm: FormGroup;
  public pubTypeForm: FormGroup;
  public languageForm: FormGroup;
  public locationForm: FormGroup;
  public pubYearForm: FormGroup;
  public subjectForm: FormGroup;
  public collapsedFilter: boolean[];

  public subLocationsExist: boolean;
  public filtersMoreLabel: string;
  public filtersToExpand: IFilter[];
  public activeFilterModal: EFilterType;

  public constructor(formBuilder: FormBuilder, searchService: SearchService) {
    this._searchService = searchService;
    this.formBuilder = formBuilder;
    this.collapsedFilter = Array(6).fill(true);
    this.subLocationsExist = false;
    this.filtersMoreLabel = '';
    this.filtersToExpand = null;
    this.filters = null;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.filters === null || this.filters.locations == null || this.filters.pubTypes == null ||
      this.filters.authors == null || this.filters.pubYears == null || this.filters.languages == null || this.filters.subjects == null) {
      return;
    }
    this.subLocationsExist = this.filters.locations.some(l => l.children !== null);
    this.populateForms();
  }

  public moreFilters(filters: IFilter[], label: string, activatedModal: EFilterType) {
    if (!filters || filters.length === 0 || !label || label === '') {
      return;
    }
    this.activeFilterModal = activatedModal;
    this.filtersMoreLabel = label;
    this.filtersToExpand = filters;
  }

  public selectionChanged(filterItem: IFilterItem, filterType: EFilterType): void {
    this.filterSelected.emit({item: filterItem, type: filterType});
  }

  private populateForms(): void {
    this.locationForm = this.formBuilder.group(this.arrToFormObjAndCollapseFill(this.filters.locations, EFilterType.LOCATION));
    this.pubTypeForm = this.formBuilder.group(this.arrToFormObjAndCollapseFill(this.filters.pubTypes, EFilterType.PUB_TYPE));
    this.authorsForm = this.formBuilder.group(this.arrToFormObjAndCollapseFill(this.filters.authors, EFilterType.AUTHOR));
    this.languageForm = this.formBuilder.group(this.arrToFormObjAndCollapseFill(this.filters.languages, EFilterType.LANGUAGE));
    this.pubYearForm = this.formBuilder.group(this.arrToFormObjAndCollapseFill(this.filters.pubYears, EFilterType.PUB_YEAR));
    this.subjectForm = this.formBuilder.group(this.arrToFormObjAndCollapseFill(this.filters.subjects, EFilterType.SUBJECT));
  }

  private arrToFormObjAndCollapseFill(fiArr: IFilter[], type: EFilterType): any {
    const retVal = {};
    fiArr.map(e => e.filter).forEach(e => retVal[e.value] = e.checked);
    this.collapsedFilter[type] = !Object.values(retVal).some(p => p === true);
    return retVal;
  }

}

