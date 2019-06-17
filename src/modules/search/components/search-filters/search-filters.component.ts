import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'search-filters',
  templateUrl: 'search-filters.component.html',
  styleUrls: ['search-filters.component.scss']
})
export class SearchFiltersComponent implements OnInit {

  public formBuilder: FormBuilder;
  public vrstaGradjeForm: FormGroup;
  public jezikForm: FormGroup;
  public lokacijaForm: FormGroup;

  public constructor(formBuilder: FormBuilder) {
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
  }

}

