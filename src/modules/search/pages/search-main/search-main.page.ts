import { ISearchModel, ISearchModelInitial } from '../../../../models/search/search.model';
import { PrefixesService } from '../../../core/services/prefixes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'ng-uikit-pro-standard';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { IResultPageOptionsInitial } from '../../../../models/search/result-page-options';

@Component({
  selector: 'app-search-main',
  templateUrl: './search-main.page.html',
  styleUrls: ['./search-main.page.scss']
})
export class SearchMainPage implements OnInit {

  private readonly _prefixesService: PrefixesService;
  private readonly _formBuilder: FormBuilder;
  private readonly _router: Router;
  private readonly _store: Store;
  private readonly _toastService: ToastService;

  public searchForm: FormGroup;
  public isPrefixCoded: boolean[] = [false, false, false, false, false];
  public contentCoders: any[] = [[], [], [], [], []];
  public prefixList: any[];
  public operatorList: any[];
  public searchModel: ISearchModel;

  public constructor(prefixesService: PrefixesService, formBuilder: FormBuilder, router: Router, store: Store, toastService: ToastService) {
    this._prefixesService = prefixesService;
    this._formBuilder = formBuilder;
    this._router = router;
    this._store = store;
    this._toastService = toastService;
    this.searchModel = ISearchModelInitial;
  }

  public ngOnInit() {
    this.prefixList = this._prefixesService.getPrefixes().map(prefix => ({ value: prefix.code, label: prefix.name}));
    this.operatorList = ['AND', 'OR', 'NOT'].map(elem => ({value: elem, label: elem}));
    this.searchForm = this._formBuilder.group({
      prefix1: ['AU', Validators.required],
      content1: [''],
      content1coder: [''],
      operator1: ['AND', Validators.required],
      prefix2: ['TI', Validators.required],
      content2: [''],
      content2coder: [''],
      operator2: ['AND', Validators.required],
      prefix3: ['KW', Validators.required],
      content3: [''],
      content3coder: [''],
      operator3: ['AND', Validators.required],
      prefix4: ['PU', Validators.required],
      content4: [''],
      content4coder: [''],
      operator4: ['AND', Validators.required],
      prefix5: ['PY', Validators.required],
      content5: [''],
      content5coder: [''],
    });
  }

  public selectedPrefix(item, index: number): void {
    const prefix = this._prefixesService.getPrefix(item.value);
    if (prefix.coder) {
      this.contentCoders[index] = prefix.coder.map(coder => ({value: coder.code, label: coder.name}));
      this.isPrefixCoded[index] = true;
    } else {
      this.isPrefixCoded[index] = false;
    }
  }

  public onSubmit() {
    this.populateSearch();
    if (!this.validateSearchModel()) {
      this._toastService.warning('Молимо вас унесите вредности претраге.');
      return;
    }
    this._router.navigate(['/search/result'], {queryParams: {query: JSON.stringify(this.searchModel),
        pageOptions: JSON.stringify(IResultPageOptionsInitial)}});
  }

  public validateSearchModel(): boolean {
    return (!(this.searchModel.text1 === '' && this.searchModel.text2 === '' && this.searchModel.text3 === '' &&
      this.searchModel.text4 === '' && this.searchModel.text5 === ''));
  }

  private populateSearch() {
    if (this.isPrefixCoded[0]) {
      if (this.searchForm.value.content1coder) {
        this.searchModel.pref1 = this.searchForm.value.prefix1;
        this.searchModel.text1 = this.searchForm.value.content1coder;
        this.searchModel.oper1 = this.searchForm.value.operator1;
      }
    } else {
      if (this.searchForm.value.content1.trim()) {
        this.searchModel.pref1 = this.searchForm.value.prefix1;
        this.searchModel.text1 = this.searchForm.value.content1.trim();
        this.searchModel.oper1 = this.searchForm.value.operator1;
      }
    }
    if (this.isPrefixCoded[1]) {
      if (this.searchForm.value.content2coder) {
        this.searchModel.pref2 = this.searchForm.value.prefix2;
        this.searchModel.text2 = this.searchForm.value.content2coder;
        this.searchModel.oper2 = this.searchForm.value.operator2;
      }
    } else {
      if (this.searchForm.value.content2.trim()) {
        this.searchModel.pref2 = this.searchForm.value.prefix2;
        this.searchModel.text2 = this.searchForm.value.content2.trim();
        this.searchModel.oper2 = this.searchForm.value.operator2;
      }
    }
    if (this.isPrefixCoded[2]) {
      if (this.searchForm.value.content3coder) {
        this.searchModel.pref3 = this.searchForm.value.prefix3;
        this.searchModel.text3 = this.searchForm.value.content3coder;
        this.searchModel.oper3 = this.searchForm.value.operator3;
      }
    } else {
      if (this.searchForm.value.content3.trim()) {
        this.searchModel.pref3 = this.searchForm.value.prefix3;
        this.searchModel.text3 = this.searchForm.value.content3.trim();
        this.searchModel.oper3 = this.searchForm.value.operator3;
      }
    }
    if (this.isPrefixCoded[3]) {
      if (this.searchForm.value.content4coder) {
        this.searchModel.pref4 = this.searchForm.value.prefix4;
        this.searchModel.text4 = this.searchForm.value.content4coder;
        this.searchModel.oper4 = this.searchForm.value.operator4;
      }
    } else {
      if (this.searchForm.value.content4.trim()) {
        this.searchModel.pref4 = this.searchForm.value.prefix4;
        this.searchModel.text4 = this.searchForm.value.content4.trim();
        this.searchModel.oper4 = this.searchForm.value.operator4;
      }
    }
    if (this.isPrefixCoded[4]) {
      if (this.searchForm.value.content5coder) {
        this.searchModel.pref5 = this.searchForm.value.prefix5;
        this.searchModel.text5 = this.searchForm.value.content5coder;
      }
    } else {
      if (this.searchForm.value.content5.trim()) {
        this.searchModel.pref5 = this.searchForm.value.prefix5;
        this.searchModel.text5 = this.searchForm.value.content5.trim();
      }
    }
  }
}
