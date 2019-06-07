import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../../core/services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../../../core/models/book';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  searchResult: Book[];
  vrstaGradjeForm: FormGroup;
  jezikForm: FormGroup;
  lokacijaForm: FormGroup;

  constructor(private booksService: BooksService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
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
    this.activatedRoute.queryParamMap.subscribe(params => {
      const query = JSON.parse(params.get('query'));
      this.booksService.search(query).subscribe(data => {
        this.searchResult = data;
      });
    });
  }
}
