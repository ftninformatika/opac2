import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Book } from '../../../core/models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookCardComponent implements OnInit {

  @Input() book: Book;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoBook(id: number) {
    this.router.navigate(['/book', id]);
  }
}
