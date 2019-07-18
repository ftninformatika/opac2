import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../../../models/book.model';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookCardComponent implements OnInit {

  @Input() book: Book;
  private readonly _router: Router;

  public constructor(router: Router) {
    this._router = router;
  }

  public ngOnInit() {}

  public gotoBook(id: number) {
    this._router.navigate(['/book', id]);
  }
}
