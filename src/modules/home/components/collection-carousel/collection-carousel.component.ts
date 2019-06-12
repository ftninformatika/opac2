import { Component, HostListener, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Book } from '../../../core/models/book';

export enum DEVICE_WIDTH_BREAKPOINTS {
  // _8_BOOKS = 1400,
  _8_BOOKS = 1150
}

@Component({
  selector: 'collection-carousel',
  templateUrl: 'collection-carousel.component.html',
  styleUrls: ['collection-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CollectionCarouselComponent implements OnInit {
  @Input() books: Book[];
  @Input() title: string;
  public slides: any = [[]];
  public chunkSize = 4;

  public ngOnInit(): void {}

  @HostListener('window:resize')
  public onWindowResize() {
    console.log(window.innerWidth);
    if (window.innerWidth >= DEVICE_WIDTH_BREAKPOINTS._8_BOOKS) {
      this.chunkSize = 8;
    }
    this.slides = this.chunk(this.books, this.chunkSize);
  }

  public chunk(arr, chunkSize) {
    const R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
}
