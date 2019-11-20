import { AfterViewInit, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { Book } from '../../../../models/book.model';
import { ERecordFormatType } from '../../../core/pipes/record-format.pipe';
import { TabsetComponent } from 'ng-uikit-pro-standard';

@Component({
  selector: 'book-tabs',
  templateUrl: 'book-tabs.html',
  styleUrls: ['book-tabs.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookTabs implements AfterViewInit {
  @ViewChild('staticTabs', { static: true }) staticTabs: TabsetComponent;
  @Input() book: Book;
  public RecordFormatType = ERecordFormatType;
  public activeTabIndex = -1;
  // TODO: extend to remove content container if needed
  public showBody = false;

  public ngAfterViewInit(): void {
    this.staticTabs.tabs[0].active = false;
  }

  public changeTab(event) {
    if (!event) {
      return;
    }
    if (event.activeTabIndex !== this.activeTabIndex) {
      this.activeTabIndex = event.activeTabIndex;
      this.showBody = true;
    } else {
      this.showBody = false;
    }
    console.log(event);
  }
}
