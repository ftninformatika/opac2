import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchService } from '../../../core/services/search.service';
import { IResultPageFilterRequest } from '../../../../models/search/result-page-options.model';

@Component({
  selector: 'search-filters',
  templateUrl: 'search-filters.component.html',
  styleUrls: ['search-filters.component.scss']
})
export class SearchFiltersComponent implements OnInit {
  @Input() searchFilterReq: IResultPageFilterRequest;
  private readonly _searchService: SearchService;
  public formBuilder: FormBuilder;
  public vrstaGradjeForm: FormGroup;
  public jezikForm: FormGroup;
  public lokacijaForm: FormGroup;
  public filtersLoaded = false;

  public constructor(formBuilder: FormBuilder, searchService: SearchService) {
    this._searchService = searchService;
    this.formBuilder = formBuilder;
  }

  public ngOnInit(): void {
    this.vrstaGradjeForm = this.formBuilder.group({
      monografske: false,
      serijske: false,
    });
    this.jezikForm = this.formBuilder.group({
      srp: false,
      eng: false,
    });
    this.lokacijaForm = this.formBuilder.group({
      bgb: false,
      stariGrad: false,
      savskiVenac: false,
    });
    this._searchService.getFilters(this.searchFilterReq).subscribe(() => this.filtersLoaded = true);
  }

}

