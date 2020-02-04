import {Component, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';
import {elementEventFullName} from '@angular/compiler/src/view_compiler/view_compiler';

@Component({
  selector: 'homepage-tabs',
  templateUrl: 'hompage-tabs.component.html',
  styleUrls: ['hompage-tabs.component.scss'],
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
