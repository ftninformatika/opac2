import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'not-found-page',
  templateUrl: 'not-found.page.html',
  styleUrls: ['not-found.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class NotFoundErrorPage {
  public constructor() {}
}
