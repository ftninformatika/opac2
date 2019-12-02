import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../../../models/book.model';
import { Store } from '@ngxs/store';
import { ConfigState } from '../../../core/states/config/config.state';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookCardComponent implements OnInit {

  @Input() book: Book;
  @Input() withButtonsAndInfo: boolean;
  private readonly _router: Router;
  private readonly _store: Store;
  private readonly _metaService: MetaService;
  public lib: string;

  public constructor(router: Router, store: Store, metaService: MetaService) {
    this._router = router;
    this._store = store;
    this.lib = this._store.selectSnapshot(ConfigState.library);
    this._metaService = metaService;
  }

  public ngOnInit() {}

  public async gotoBook(id: string) {
    await this._router.navigate(['/book', this.lib, id]);
  }
}
