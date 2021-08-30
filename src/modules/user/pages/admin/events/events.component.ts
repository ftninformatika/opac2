import {ChangeDetectorRef, Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {EventsService} from "../../../../core/services/events.service";
import {Event} from "../../../../../models/admin/event.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {
  IMyOptions,
  MdbTableDirective,
  MdbTablePaginationComponent,
  UploadOutput
} from "ng-uikit-pro-standard";
import {SR_LOCATE} from "../../../../../utils/consts";
import {ToastService} from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: Event[];
  event: Event;
  activeEvent: Event;
  selectedImage: File;
  imgURL: string | ArrayBuffer;

  validatingForm: FormGroup;
  myDatePickerOptions: IMyOptions = SR_LOCATE

  // table
  @ViewChild(MdbTableDirective, {static: true}) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, {static: true}) mdbTablePagination: MdbTablePaginationComponent;

  headElements = ['', 'Наслов', 'Садржај', 'Датум', ''];
  sortFields = ['', 'title', 'content', 'date'];

  searchText: string = '';
  previous: string;
  maxVisibleItems: number = 8;

  constructor(private eventService: EventsService, private toastService: ToastService, private cdRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.eventService.getAll().subscribe(async data => {
      this.events = await this.downloadImages(data);
      this.mdbTable.setDataSource(this.events);
      this.events = this.mdbTable.getDataSource();
      this.previous = this.mdbTable.getDataSource();
    });

    this.createForm();
    this.event = new Event();
  }


  async downloadImages(events) {
    for (let i = 0; i < events.length; i++) {
      this.eventService.downloadPhoto(events[i]._id).subscribe(photo => {
        var reader = new FileReader();
        reader.readAsDataURL(photo);
        reader.onload = () => {
          events[i].image = reader.result;
        };
      })
    }
    return events;
  }


  createForm() {
    this.validatingForm = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
    });
  }

  get title() {
    return this.validatingForm.get('title');
  }

  get content() {
    return this.validatingForm.get('content');
  }

  get date() {
    return this.validatingForm.get('date');
  }


  onBtnCreateEvent() {
    if (this.validatingForm.invalid) {
      this.toastService.warning("Није могуће направити догађај. Проверите да ли сте попунили обавезна поља")
    } else {
      this.eventService.create(this.createFormData()).subscribe(success => {
        if (success) {
          this.events = [this.event, ...this.events];
          this.toastService.success("Успешно сте направили нови догађај")
        } else {
          this.toastService.error("Дошло је до грешке приликом креирања новог догађаја. Покушајте поново")
        }
      });
      this.closeDialog();
    }
  }

  createFormData() {
    const formData = new FormData();
    formData.append('file', this.selectedImage);
    formData.append('title', this.event.title);
    formData.append('content', this.event.content);
    // formData.append('date', this.event.date.toString());   // todo: set date
    return formData;
  }

  onImageUpload(file: UploadOutput | any): void {
    this.selectedImage = file[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedImage);
    reader.onload = () => {
      this.imgURL = reader.result;
    };
  }


  closeDialog() {
    this.validatingForm.reset();
    this.selectedImage = null;
    this.imgURL = null;
    this.event = {};
  }

  @HostListener('input')
  oninput() {
    this.mdbTablePagination.searchText = this.searchText;
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(this.maxVisibleItems);
    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  searchItems() {
    const prev = this.mdbTable.getDataSource();

    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.events = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.events = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(prev);
    }

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();

    this.mdbTable.searchDataObservable(this.searchText).subscribe(() => {
      this.mdbTablePagination.calculateFirstItemIndex();
      this.mdbTablePagination.calculateLastItemIndex();
    });
  }

  setActiveEvent(ev: Event) {
    this.activeEvent = ev;
  }

  setEditEvent(ev: Event) {
    this.event = {...ev};
  }

  remove() {
    console.log("Delete:" + this.activeEvent.title)
    const idx: number = this.events.findIndex(item => item._id === this.activeEvent._id);
    if (idx !== -1) {
      this.events.splice(idx, 1);
      this.events = [...this.events]
    }
  }

  edit() {
    console.log("Edit:" + this.activeEvent.title)
  }
}
