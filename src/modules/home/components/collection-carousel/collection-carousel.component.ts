import { ChangeDetectionStrategy, Component, HostListener, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Book } from '../../../core/models/book';


export enum DEVICE_WIDTH_BREAKPOINTS {
  _8_BOOKS = 1250,
  _7_BOOKS = 1050,
  _6_BOOKS = 850,
  _5_BOOKS = 780,
  _4_BOOKS = 650,
  _3_BOOKS = 520,
  _2_BOOKS = 370
}

export enum ANIMATE_DIRECTION {
  LEFT = 'left',
  RIGHT = 'right'
}

@Component({
  selector: 'collection-carousel',
  templateUrl: 'collection-carousel.component.html',
  styleUrls: ['collection-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionCarouselComponent implements OnInit {
  @Input() books: Book[];
  @Input() title: string;
  public slides: any = [[]];
  public chunkSize = 7;
  public activeSlideIndex = 0;
  public lastSlide = 0;
  public animateDirection;

  public ngOnInit(): void {
    this.onWindowResize();
  }

  @HostListener('window:resize')
  public onWindowResize() {
    if (window.innerWidth >= DEVICE_WIDTH_BREAKPOINTS._8_BOOKS) {
      this.chunkSize = 8;
    } else if (window.innerWidth >= DEVICE_WIDTH_BREAKPOINTS._7_BOOKS) {
      this.chunkSize = 7;
    } else if (window.innerWidth >= DEVICE_WIDTH_BREAKPOINTS._6_BOOKS) {
      this.chunkSize = 6;
    } else if (window.innerWidth >= DEVICE_WIDTH_BREAKPOINTS._5_BOOKS) {
      this.chunkSize = 5;
    } else if (window.innerWidth >= DEVICE_WIDTH_BREAKPOINTS._4_BOOKS) {
      this.chunkSize = 4;
    } else if (window.innerWidth >= DEVICE_WIDTH_BREAKPOINTS._3_BOOKS) {
      this.chunkSize = 3;
    } else if (window.innerWidth >= DEVICE_WIDTH_BREAKPOINTS._2_BOOKS) {
      this.chunkSize = 2;
    } else {
      this.chunkSize = 1;
    }
    this.slides = this.chunk(this.books, this.chunkSize);
    this.lastSlide = this.slides.length - 1;
    if (this.lastSlide < this.activeSlideIndex) { this.activeSlideIndex = this.lastSlide; }
  }

  public chunk(arr, chunkSize) {
    const R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  public changeSlide(index: number) {
    this.animateDirection = index <= this.activeSlideIndex ? ANIMATE_DIRECTION.RIGHT : ANIMATE_DIRECTION.LEFT;
    this.activeSlideIndex = index;
  }

  public previousSlide() {
    if (this.activeSlideIndex > 0) { this.activeSlideIndex--; }
    this.animateDirection = ANIMATE_DIRECTION.RIGHT;
  }

  public nextSlide() {
    if (this.activeSlideIndex < this.lastSlide) { this.activeSlideIndex++; }
    this.animateDirection = ANIMATE_DIRECTION.LEFT;
  }
}
