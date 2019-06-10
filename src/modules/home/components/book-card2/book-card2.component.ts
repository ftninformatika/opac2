import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Book } from '../../../core/models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'book-card2',
  templateUrl: './book-card2.component.html',
  styleUrls: ['./book-card2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookCard2Component implements OnInit {

  @Input() book: Book;
  private readonly _router: Router;

  public constructor(router: Router) {
    this._router = router;
  }

  public ngOnInit() {
  }

  public gotoBook(id: number) {
    this._router.navigate(['/book', id]);
  }
}
