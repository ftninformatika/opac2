import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'paginator',
  templateUrl: 'paginator.component.html',
  styleUrls: ['paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PaginatorComponent {
  @Input() totalPages: number;
  @Input() first: boolean;
  @Input() last: boolean;
  @Input() empty: boolean;
  @Input() pageNumber: boolean; // Current page

}
