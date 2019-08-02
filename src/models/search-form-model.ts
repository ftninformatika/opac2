import { Validators } from '@angular/forms';
import { ISearchModel } from './search/search.model';

export class SearchFormModel {
  operator1 = ['', Validators.required];
  operator2 = ['', Validators.required];
  operator3 = ['', Validators.required];
  operator4 = ['', Validators.required];
  prefix1 = ['', Validators.required];
  prefix2 = ['', Validators.required];
  prefix3 = ['', Validators.required];
  prefix4 = ['', Validators.required];
  prefix5 = ['', Validators.required];
  content1coder = '';
  content2coder = '';
  content3coder = '';
  content4coder = '';
  content5coder = '';
  content1 = '';
  content2 = '';
  content3 = '';
  content4 = '';
  content5 = '';

  public constructor(pref1?: any, pref2?: any, pref3?: any, pref4?: any, pref5?: any,
                     operator1?: any, operator2?: any, operator3?: any, operator4?: any) {
    this.operator1 = operator1;
    this.operator2 = operator2;
    this.operator3 = operator3;
    this.operator4 = operator4;
    this.prefix1 = pref1;
    this.prefix2 = pref2;
    this.prefix3 = pref3;
    this.prefix4 = pref4;
    this.prefix5 = pref5;
  }

  public partialInitFromSearchModel(sm: ISearchModel) {
    this.operator1 = [sm.oper1, Validators.required];
    this.operator2 = [sm.oper2, Validators.required];
    this.operator3 = [sm.oper3, Validators.required];
    this.operator4 = [sm.oper4, Validators.required];
    this.prefix1 = [sm.pref1, Validators.required];
    this.prefix2 = [sm.pref2, Validators.required];
    this.prefix3 = [sm.pref3, Validators.required];
    this.prefix4 = [sm.pref4, Validators.required];
    this.prefix5 = [sm.pref5, Validators.required];
  }
}

export const SearchFormModelInitial: SearchFormModel = new SearchFormModel(['AU', Validators.required],
  ['TI', Validators.required], ['KW', Validators.required], ['PU', Validators.required],
  ['PY', Validators.required], ['AND', Validators.required], ['AND', Validators.required],
  ['AND', Validators.required], ['AND', Validators.required]);

