import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'side-misc',
  templateUrl: 'side-misc.component.html',
  styleUrls: ['side-misc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SideMiscComponent {
}
