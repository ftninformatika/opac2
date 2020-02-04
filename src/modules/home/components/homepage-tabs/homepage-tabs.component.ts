import {Component, Renderer2, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'homepage-tabs',
  templateUrl: 'homepage-tabs.component.html',
  styleUrls: ['homepage-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageTabsComponent {
  private readonly _renderer: Renderer2;

  constructor(renderer: Renderer2) {
    this._renderer = renderer;
  }

  public onSearchTabClick() {
    const element = this._renderer.selectRootElement('#searchInput');
    setTimeout(() => element.focus(), 0);
  }
}
