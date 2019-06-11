import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../../core/models/book';

@Component({
  selector: 'book-collection-carousel',
  templateUrl: 'book-collection-carousel.component.html',
  styleUrls: ['book-collection-carousel.component.scss']
})
export class BookCollectionCarouselComponent implements OnInit{
  @Input() books: Book[];
  @Input() collectionTitle: string;
  @Input() collectionDescription: string;
  public slidesArr: Array<number>;

  public constructor() {}

  public ngOnInit(): void {
    if (this.books) {
      this.slidesArr = Array(Math.ceil(this.books.length / 3)).fill(0).map(Number.call, Number);
    }
    console.log(this.slidesArr);
  }

}
