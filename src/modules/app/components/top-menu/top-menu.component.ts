import { Component } from '@angular/core';
import { BooksService } from '../../../core/services/books.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Book } from '../../../core/models/book';

@Component({
  selector: 'top-menu',
  templateUrl: 'top-menu.component.html',
  styleUrls: ['top-menu.component.scss']
})
export class TopMenuComponent {
  private readonly _bookService: BooksService;
  private readonly _router: Router;
  public searchText: string;
  public results: Observable<Book[]>;

  public constructor(booksService: BooksService, router: Router) {
    this._bookService = booksService;
    this._router = router;
  }

  public searchEntries(term: string): Observable<Book[]> {
    return this._bookService.simpleSearch(term);
  }

  public getFilteredData() {
    this.results = this.searchEntries(this.searchText);
  }

  public emptySearchResults() {
    this.results = of([] as Book[]);
  }

  public onChange() {
    if (this.searchText.length > 3) {
      this.getFilteredData();
    } else {
      this.emptySearchResults();
    }
  }

  public onAutoCompleteSelect(event) {
    console.log(event);
    const bookId: number = + event.text;
    this.searchText = '';
    this._router.navigate(['/book', bookId]);
  }
}
