import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[backToTopButton]'
})

export class BackToTopButton {
  state = false;
  constructor( private btn: ElementRef, private renderer: Renderer2, ) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;
    console.log(scrollPosition);
    if (scrollPosition < 700) {
      if (this.state) {
        if (this.btn.nativeElement.classList.contains('d-none')) {
          console.log('usao');
          this.renderer.removeClass(this.btn.nativeElement, 'd-none');
        } else {
          this.renderer.addClass(this.btn.nativeElement, 'd-none');
        }
        this.renderer.removeClass(this.btn.nativeElement, 'fadeIn');
        this.renderer.addClass(this.btn.nativeElement, 'fadeOut');
        this.state = false;
      }
    } else {
      if (!this.state) {
        if (this.btn.nativeElement.classList.contains('d-none')) {
          this.renderer.removeClass(this.btn.nativeElement, 'd-none');
        }
        this.renderer.removeClass(this.btn.nativeElement, 'fadeOut');
        this.renderer.addClass(this.btn.nativeElement, 'fadeIn');
        this.state = true;
      }
    }
  }
}
