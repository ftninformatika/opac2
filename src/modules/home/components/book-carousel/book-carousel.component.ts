import { Component, HostListener, OnInit, Input, ViewChild } from '@angular/core';
import { Book } from '../../../core/models/book';
import { CarouselComponent } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-book-carousel',
  templateUrl: './book-carousel.component.html',
  styleUrls: ['./book-carousel.component.scss']
})
export class BookCarouselComponent implements OnInit {

  CAROUSEL_BREAKPOINT_1 = 768;
  CAROUSEL_BREAKPOINT_2 = 1200;
  carouselDisplayMode = 'multiple';

  @Input() title: string;
  @Input() books: Book[];
  @ViewChild('carousel') carousel: CarouselComponent;

  constructor() { }

  slides: any = [[]];
  chunkSize: number = 4;
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
  onWindowResize() {
    if (window.innerWidth <= this.CAROUSEL_BREAKPOINT_1) {
      this.carouselDisplayMode = 'single';
    } else {
      this.carouselDisplayMode = 'multiple';
      const oldChunkSize = this.chunkSize;
      if (window.innerWidth <= this.CAROUSEL_BREAKPOINT_2) {
        this.chunkSize = 3;
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

  nextSlide(): void {
    this.carousel.nextSlide();
  }
}
