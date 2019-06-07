import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PrefixesService } from '../../../../core/services/prefixes.service';

@Component({
  selector: 'app-search-main',
  templateUrl: './search-main.component.html',
  styleUrls: ['./search-main.component.scss']
})
export class SearchMainComponent implements OnInit {

  searchForm: FormGroup;
  isPrefixCoded: boolean[] = [false, false, false, false, false];
  contentCoders: any[] = [[], [], [], [], []];

  prefixList: any[];
  operatorList: any[];

  constructor(private prefixesService: PrefixesService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.prefixList = this.prefixesService.getPrefixes().map(prefix => ({ value: prefix.code, label: prefix.name}));
    this.operatorList = ['AND', 'OR', 'NOT'].map(elem => ({value: elem, label: elem}));
    this.searchForm = this.formBuilder.group({
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

  selectedPrefix(item, index: number): void {
    const prefix = this.prefixesService.getPrefix(item.value);
    if (prefix.coder) {
      this.contentCoders[index] = prefix.coder.map(coder => ({value: coder.code, label: coder.name}));
      this.isPrefixCoded[index] = true;
    } else {
      this.isPrefixCoded[index] = false;
    }
  }

  onSubmit() {
    const query = [];
    if (this.isPrefixCoded[0]) {
      if (this.searchForm.value.content1coder) {
        query.push({
          prefix: this.searchForm.value.prefix1,
          content: this.searchForm.value.content1coder,
          operator: this.searchForm.value.operator1});
      }
    } else {
      if (this.searchForm.value.content1.trim()) {
        query.push({
          prefix: this.searchForm.value.prefix1,
          content: this.searchForm.value.content1.trim(),
          operator: this.searchForm.value.operator1});
      }
    }
    if (this.isPrefixCoded[1]) {
      if (this.searchForm.value.content2coder) {
        query.push({
          prefix: this.searchForm.value.prefix2,
          content: this.searchForm.value.content2coder,
          operator: this.searchForm.value.operator2});
      }
    } else {
      if (this.searchForm.value.content2.trim()) {
        query.push({
          prefix: this.searchForm.value.prefix2,
          content: this.searchForm.value.content2.trim(),
          operator: this.searchForm.value.operator2});
      }
    }
    if (this.isPrefixCoded[2]) {
      if (this.searchForm.value.content3coder) {
        query.push({
          prefix: this.searchForm.value.prefix3,
          content: this.searchForm.value.content3coder,
          operator: this.searchForm.value.operator3});
      }
    } else {
      if (this.searchForm.value.content3.trim()) {
        query.push({
          prefix: this.searchForm.value.prefix3,
          content: this.searchForm.value.content3.trim(),
          operator: this.searchForm.value.operator3});
      }
    }
    if (this.isPrefixCoded[3]) {
      if (this.searchForm.value.content4coder) {
        query.push({
          prefix: this.searchForm.value.prefix4,
          content: this.searchForm.value.content4coder,
          operator: this.searchForm.value.operator4});
      }
    } else {
      if (this.searchForm.value.content4.trim()) {
        query.push({
          prefix: this.searchForm.value.prefix4,
          content: this.searchForm.value.content4.trim(),
          operator: this.searchForm.value.operator4});
      }
    }
    if (this.isPrefixCoded[4]) {
      if (this.searchForm.value.content5coder) {
        query.push({
          prefix: this.searchForm.value.prefix5,
          content: this.searchForm.value.content5coder,
          operator: this.searchForm.value.operator5});
      }
    } else {
      if (this.searchForm.value.content5.trim()) {
        query.push({
          prefix: this.searchForm.value.prefix5,
          content: this.searchForm.value.content5.trim(),
          operator: null});
      }
    }
    this.router.navigate(['/result'], {queryParams: {query: JSON.stringify(query)}});
  }
}
