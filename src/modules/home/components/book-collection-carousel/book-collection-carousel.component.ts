import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Book } from '../../../core/models/book';
import { CarouselComponent } from 'ng-uikit-pro-standard';

@Component({
  selector: 'book-collection-carousel',
  templateUrl: 'book-collection-carousel.component.html',
  styleUrls: ['book-collection-carousel.component.scss']
})
export class BookCollectionCarouselComponent implements OnInit {
  CAROUSEL_BREAKPOINT_SM = 576;
  CAROUSEL_BREAKPOINT_MD = 768;
  CAROUSEL_BREAKPOINT_LG = 1200;
  carouselDisplayMode = 'multiple';

  @Input() title: string;
  @Input() books: Book[];
  @ViewChild('carousel') carousel: CarouselComponent;

  public constructor() {}

  slides: any = [[]];
  chunkSize = 4;

  public chunk(arr, chunkSize) {
    const R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  public ngOnInit() {
    this.slides = this.chunk(this.books, this.chunkSize);
    this.onWindowResize();
  }

  @HostListener('window:resize')
  public onWindowResize() {
    if (window.innerWidth <= this.CAROUSEL_BREAKPOINT_SM) {
      this.carouselDisplayMode = 'single';
    } else {
      this.carouselDisplayMode = 'multiple';
      const oldChunkSize = this.chunkSize;
      if (window.innerWidth <= this.CAROUSEL_BREAKPOINT_MD) {
        this.chunkSize = 2;
      } else if (window.innerWidth <= this.CAROUSEL_BREAKPOINT_LG) {
        this.chunkSize = 3;
      } else {
        this.chunkSize = 4;
      }
      if (this.chunkSize !== oldChunkSize) {
        this.slides = this.chunk(this.books, this.chunkSize);
      }
    }
    console.log(this.chunkSize);
  }

  public previousSlide(): void {
    this.carousel.previousSlide();
  }

  public nextSlide(): void {
    this.carousel.nextSlide();
  }

}
