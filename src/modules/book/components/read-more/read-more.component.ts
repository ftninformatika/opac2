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
  }

  public expand() {
    this.charsCollapsed = this.text ? this.text.length : 0;
  }

  public collapse() {
    this.charsCollapsed = 800;
  }
}
