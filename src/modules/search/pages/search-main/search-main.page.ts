import { IResultPageOptionsInitial } from '../../../../models/search/result-page-options.model';
import { SearchFormModel, SearchFormModelInitial } from '../../../../models/search-form-model';
import { ISearchModel, ISearchModelInitial } from '../../../../models/search/search.model';
import { EAutoCompletePrefixes } from '../../../../models/prefix-value.model';
import { PrefixesService } from '../../../core/services/prefixes.service';
import { ConfigState } from '../../../core/states/config/config.state';
import { CryptoUtils } from '../../../../utils/crypto.utils';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastService } from 'ng-uikit-pro-standard';
import { Component, OnInit } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-main',
  templateUrl: './search-main.page.html',
  styleUrls: ['./search-main.page.scss']
})
export class SearchMainPage implements OnInit {

  private readonly _prefixesService: PrefixesService;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _toastService: ToastService;
  private readonly _formBuilder: FormBuilder;
  private readonly _router: Router;
  private readonly _store: Store;

  public searchForm: FormGroup;
  public isPrefixCoded: boolean[] = [false, false, false, false, false];
  public contentCoders: any[] = [[], [], [], [], []];
  public prefixList: any[];
  public operatorList: any[];
  public searchModel: ISearchModel;
  public inputSm$: Observable<ISearchModel>;

  public constructor(prefixesService: PrefixesService, formBuilder: FormBuilder, router: Router,
                     store: Store, toastService: ToastService, activatedRoute: ActivatedRoute) {
    this._prefixesService = prefixesService;
    this._activatedRoute = activatedRoute;
    this._toastService = toastService;
    this._formBuilder = formBuilder;
    this._router = router;
    this._store = store;
  }

  public ngOnInit() {
    this.searchModel = {...ISearchModelInitial};
    this.prefixList = this._prefixesService.getPrefixes().map(prefix => ({ value: prefix.code, label: prefix.name}));
    this.operatorList = [{value: 'AND', label: 'И'}, {value: 'OR', label: 'ИЛИ'}, {value: 'NOT', label: 'НЕ'}];
    this.inputSm$ = this._activatedRoute.paramMap.pipe( map(() => window.history.state as ISearchModel));
    this.initSearchForm();
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
    this.populateSearchModel();
    if (!this.validateSearchModel()) {
      this._toastService.warning('Молимо вас унесите вредности претраге.');
      return;
    }
    const pageOptions = {...IResultPageOptionsInitial};
    pageOptions.lib = this._store.selectSnapshot(ConfigState.library);
    const uriChunk = `query=${JSON.stringify(this.searchModel)}&pageOptions=${JSON.stringify(pageOptions)}`;
    const encodedURI = CryptoUtils.encryptData(uriChunk);
    this._router.navigate(['/search/result'], {queryParams: {s: encodedURI}});
  }

  public validateSearchModel(): boolean {
    return (!(this.searchModel.text1 === '' && this.searchModel.text2 === '' && this.searchModel.text3 === '' &&
      this.searchModel.text4 === '' && this.searchModel.text5 === ''));
  }

  private populateSearchModel() {
    this.searchModel.pref1 = this.searchForm.value.prefix1;
    this.searchModel.pref2 = this.searchForm.value.prefix2;
    this.searchModel.pref3 = this.searchForm.value.prefix3;
    this.searchModel.pref4 = this.searchForm.value.prefix4;
    this.searchModel.pref5 = this.searchForm.value.prefix5;
    if (this.isPrefixCoded[0]) {
      if (this.searchForm.value.content1coder) {
        this.searchModel.text1 = this.searchForm.value.content1coder;
        this.searchModel.oper1 = this.searchForm.value.operator1;
      }
    } else {
      if (this.searchForm.value.content1.trim()) {
        this.searchModel.text1 = this.searchForm.value.content1.trim();
        this.searchModel.oper1 = this.searchForm.value.operator1;
      }
    }
    if (this.isPrefixCoded[1]) {
      if (this.searchForm.value.content2coder) {
        this.searchModel.text2 = this.searchForm.value.content2coder;
        this.searchModel.oper2 = this.searchForm.value.operator2;
      }
    } else {
      if (this.searchForm.value.content2.trim()) {
        this.searchModel.text2 = this.searchForm.value.content2.trim();
        this.searchModel.oper2 = this.searchForm.value.operator2;
      }
    }
    if (this.isPrefixCoded[2]) {
      if (this.searchForm.value.content3coder) {
        this.searchModel.text3 = this.searchForm.value.content3coder;
        this.searchModel.oper3 = this.searchForm.value.operator3;
      }
    } else {
      if (this.searchForm.value.content3.trim()) {
        this.searchModel.text3 = this.searchForm.value.content3.trim();
        this.searchModel.oper3 = this.searchForm.value.operator3;
      }
    }
    if (this.isPrefixCoded[3]) {
      if (this.searchForm.value.content4coder) {
        this.searchModel.text4 = this.searchForm.value.content4coder;
        this.searchModel.oper4 = this.searchForm.value.operator4;
      }
    } else {
      if (this.searchForm.value.content4.trim()) {
        this.searchModel.text4 = this.searchForm.value.content4.trim();
        this.searchModel.oper4 = this.searchForm.value.operator4;
      }
    }
    if (this.isPrefixCoded[4]) {
      if (this.searchForm.value.content5coder) {
        this.searchModel.text5 = this.searchForm.value.content5coder;
      }
    } else {
      if (this.searchForm.value.content5.trim()) {
        this.searchModel.text5 = this.searchForm.value.content5.trim();
      }
    }
  }

  private initSearchForm() {
    this.searchForm = this._formBuilder.group({...SearchFormModelInitial});
    this.inputSm$
      .pipe(take(1))
      .subscribe(
      (sm: ISearchModel) => {
        // Minimum indicator that ISearchModel is passed and we dont modify autocomplete search results
        if (sm.pref1 && sm.pref1 !== EAutoCompletePrefixes.PUBLISHERS) {
          const sfM = new SearchFormModel();
          sfM.partialInitFromSearchModel(sm);
          this.populateFormContentFromModel(sm, sfM);
          this.searchForm = this._formBuilder.group(sfM);
        }
      }
    );
  }

  private populateFormContentFromModel(sm: ISearchModel, sfM: SearchFormModel) {
    if (!sm) {
      return;
    }
    if (this.prefixIsCoded(sm.pref1)) {
      this.contentCoders[0] = this.getItemsFromCodedPrefix(sm.pref1);
      sfM.content1coder = sm.text1;
      this.isPrefixCoded[0] = true;
    } else {
      sfM.content1 = sm.text1;
    }
    if (this.prefixIsCoded(sm.pref2)) {
      this.contentCoders[1] = this.getItemsFromCodedPrefix(sm.pref2);
      sfM.content2coder = sm.text2;
      this.isPrefixCoded[1] = true;
    } else {
      sfM.content2 = sm.text2;
    }
    if (this.prefixIsCoded(sm.pref3)) {
      this.contentCoders[2] = this.getItemsFromCodedPrefix(sm.pref3);
      sfM.content3coder = sm.text3;
      this.isPrefixCoded[2] = true;
    } else {
      sfM.content3 = sm.text3;
    }
    if (this.prefixIsCoded(sm.pref4)) {
      this.contentCoders[3] = this.getItemsFromCodedPrefix(sm.pref4);
      sfM.content4coder = sm.text4;
      this.isPrefixCoded[3] = true;
    } else {
      sfM.content4 = sm.text4;
    }
    if (this.prefixIsCoded(sm.pref5)) {
      this.contentCoders[4] = this.getItemsFromCodedPrefix(sm.pref5);
      sfM.content5coder = sm.text5;
      this.isPrefixCoded[4] = true;
    } else {
      sfM.content5 = sm.text5;
    }
  }

  private prefixIsCoded(val: string): boolean {
    return (this._prefixesService.getPrefix(val).coder !== undefined);
  }

  private getItemsFromCodedPrefix(val: string): any[] {
    if (!val) {
      return [];
    }
    const prefix = this._prefixesService.getPrefix(val);
    if (!prefix.coder) {
      return [];
    }
    return prefix.coder.map(c => ({value: c.code, label: c.name}));
  }
}
