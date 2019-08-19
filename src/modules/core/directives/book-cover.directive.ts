import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[bookCover]'
})
export class BookCoverDirective implements OnInit {

  private el: ElementRef;

  public constructor(el: ElementRef) {
    this.el = el;
  }

  public ngOnInit(): void {
    if (this.el.nativeElement.localName === 'img') {
      console.log(this.el);
      console.log(this.el.nativeElement.attributes.item(1));
      console.log(this.el.nativeElement.currentSrc);
    }
  }

}
