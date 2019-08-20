import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { ERecordItemStatus, RecordItem } from '../../../../models/book.model';

@Component({
  selector: 'items-table',
  templateUrl: 'items-table.component.html',
  styleUrls: ['items-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsTableComponent {
  ItemStatus = ERecordItemStatus;
  @Input() items: RecordItem[];
}
