import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'access-denied-page',
  templateUrl: 'access-denied.page.html',
  styleUrls: ['access-denied.page.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccessDeniedErrorPage {

  public constructor() {}
}
