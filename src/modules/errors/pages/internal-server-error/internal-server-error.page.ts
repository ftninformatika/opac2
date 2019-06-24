import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'internal-server-error-page',
  templateUrl: 'internal-server-error.page.html',
  styleUrls: ['internal-server-error.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class InternalServerErrorPage {
  public constructor() {}
}
