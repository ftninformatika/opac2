import { IResultPageFilterRequest } from '../../../../models/search/result-page-options.model';
import { SearchService } from '../../../core/services/search.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IFilter, IFilterItem, IFilters } from '../../../../models/filter.model';

@Component({
  selector: 'search-filters',
  templateUrl: 'search-filters.component.html',
  styleUrls: ['search-filters.component.scss']
})
export class SearchFiltersComponent implements OnInit {
  @Input() searchFilterReq: IResultPageFilterRequest;
  private readonly _searchService: SearchService;
  public filters: IFilters;
  public formBuilder: FormBuilder;
  public authorsForm: FormGroup;
  public pubTypeForm: FormGroup;
  public languageForm: FormGroup;
  public locationForm: FormGroup;
  public pubYearForm: FormGroup;
  public filtersLoaded: boolean;

  public constructor(formBuilder: FormBuilder, searchService: SearchService) {
    this._searchService = searchService;
    this.formBuilder = formBuilder;
    this.filtersLoaded = false;
    this.filters = null;
  }

  public ngOnInit(): void {
    this._searchService.getFilters(this.searchFilterReq).subscribe(res => {
      this.filters = res;
      this.filtersLoaded = true;
      console.log(this.filters);
      this.populateForms();
    });
  }

  private populateForms(): void {
    console.log();
    this.locationForm = this.formBuilder.group(this.filterArrayToFormObj(this.filters.locations));
    this.authorsForm = this.formBuilder.group(this.filterArrayToFormObj(this.filters.authors));
    this.pubTypeForm = this.formBuilder.group(this.filterArrayToFormObj(this.filters.pubTypes));
    this.languageForm = this.formBuilder.group(this.filterArrayToFormObj(this.filters.languages));
    this.pubYearForm = this.formBuilder.group(this.filterArrayToFormObj(this.filters.pubYears));
  }

  private filterArrayToFormObj(fiArr: IFilter[]): any {
    const retVal = {};
    fiArr.map(e => e.filter).forEach(e => retVal[e.value] = e.checked);
    return retVal;
  }

}

