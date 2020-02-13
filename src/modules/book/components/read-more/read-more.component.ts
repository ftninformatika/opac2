import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit {

  @Input() text: string;
  public isCollapsed = true;
  public charsCollapsed: number;

  public constructor() { }
  public ngOnInit() {
    this.charsCollapsed = 800;
    this.calculculateCharsAllowed();
  }

  @HostListener('window:resize')
  public onWindowResize() {
    console.log(window.innerWidth);
    console.log(this.text.length);
  }

  public expand() {
    this.charsCollapsed = this.text ? this.text.length : 0;
  }

  public collapse() {
    this.charsCollapsed = this.calculculateCharsAllowed();
  }

  private calculculateCharsAllowed(): number {
    return 900;
  }
}
