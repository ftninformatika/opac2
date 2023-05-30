import { Meta } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  private readonly _meta: Meta;

  public constructor(meta: Meta) {
    this._meta = meta;
  }

  public changeSocialMetaTags(
    tags: { property: string; content: string }[]
  ): void {
    if (!tags) {
      return;
    }
    for (const tag of tags) {
      // if (this._meta.getTag(tag.name) !== null) {
      //   this._meta.removeTag(tag.name);
      // }
      this._meta.updateTag(tag);
    }
  }
}
