import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { IResultPageOptions } from '../../../../models/search/result-page-options.model';
import { ConfigState } from '../../../core/states/config/config.state';
import { Book } from '../../../../models/book.model';
import { Store } from '@ngxs/store';

@Component({
  selector: 'result-table-view',
  templateUrl: 'result-table-view.component.html',
  styleUrls: ['result-table-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultTableView {
  @Input() books: Book[];
  @Input() pageOptions: IResultPageOptions;
  @Input() totalItems: number;
  private readonly _store: Store;
  public lib: string;

  public constructor(store: Store) {
    this._store = store;
    this.lib = this._store.selectSnapshot(ConfigState.library);
  }
}
