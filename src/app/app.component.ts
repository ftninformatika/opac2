import { Component } from '@angular/core';
import { BooksService } from './services/books.service';
import { Book } from './models/book';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  searchText: string;
  results: Observable<Book[]>;

  constructor(private booksService: BooksService,
              private router: Router) { }

  searchEntries(term: string): Observable<Book[]> {
    return this.booksService.simpleSearch(term);
  }

  getFilteredData() {
    this.results = this.searchEntries(this.searchText);
  }

  emptySearchResults() {
    this.results = of([] as Book[]);
  }

  onChange() {
    if (this.searchText.length > 3) {
      this.getFilteredData();
    } else {
      this.emptySearchResults();
    }
  }

  onAutoCompleteSelect(event) {
    const bookId: number = +event.text;
    this.searchText = '';
    this.router.navigate(['/book', bookId]);
  }
}
