import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Book } from '../../../../models/book.model';
import { IResultPageOptions } from '../../../../models/search/result-page-options.model';

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
}
