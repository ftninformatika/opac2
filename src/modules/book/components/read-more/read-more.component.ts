import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit {

  public isCollapsed = true;

  public constructor() { }

  public ngOnInit() { }

}
