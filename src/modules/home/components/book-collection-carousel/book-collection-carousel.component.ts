import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Book } from '../../../core/models/book';
import { CarouselComponent } from 'ng-uikit-pro-standard';

@Component({
  selector: 'book-collection-carousel',
  templateUrl: 'book-collection-carousel.component.html',
  styleUrls: ['book-collection-carousel.component.scss']
})
export class BookCollectionCarouselComponent implements OnInit {
  CAROUSEL_BREAKPOINT_XS = 576;
  CAROUSEL_BREAKPOINT_S = 768;
  CAROUSEL_BREAKPOINT_MD = 1200;
  CAROUSEL_BREAKPOINT_XL = 1460;
  carouselDisplayMode = 'multiple';

  @Input() title: string;
  @Input() books: Book[];
  @ViewChild('carousel') carousel: CarouselComponent;

  public constructor() {}

  slides: any = [[]];
  chunkSize = 4;
  chunk(arr, chunkSize) {
    const R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.books, this.chunkSize);
    this.onWindowResize();
  }

  @HostListener('window:resize')
  public onWindowResize() {
    if (window.innerWidth <= this.CAROUSEL_BREAKPOINT_XS) {
      this.carouselDisplayMode = 'single';
    } else {
      this.carouselDisplayMode = 'multiple';
      const oldChunkSize = this.chunkSize;
      if (window.innerWidth <= this.CAROUSEL_BREAKPOINT_S) {
        this.chunkSize = 2;
      } else if (window.innerWidth <= this.CAROUSEL_BREAKPOINT_MD) {
        this.chunkSize = 3;
      } else if (window.innerWidth <= this.CAROUSEL_BREAKPOINT_XL) {
        this.chunkSize = 4;
      } else {
        this.chunkSize = 4;
      }
      if (this.chunkSize !== oldChunkSize) {
        this.slides = this.chunk(this.books, this.chunkSize);
      }
    }
  }

  previousSlide(): void {
    this.carousel.previousSlide();
  }

  public nextSlide(): void {
    this.carousel.nextSlide();
  }

}
