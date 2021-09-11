import {Component, OnInit, ViewChild} from '@angular/core';
import {EventsService} from "../../../../core/services/events.service";
import {Event, EventFilter} from "../../../../../models/admin/event.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {
  IMyOptions,
  ModalDirective,
  UploadOutput
} from "ng-uikit-pro-standard";
import {SR_LOCATE} from "../../../../../utils/consts";
import {ToastService} from 'ng-uikit-pro-standard';
import {
  EventsResultPage,
  IEventsPageOptions,
  IResultPageOptionsInitial,
} from "../../../../../models/admin/events-page-options.model";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  @ViewChild('createModal', {static: true}) createModal: ModalDirective;
  events: Event[];
  event: Event;
  eventToDelete: Event;
  selectedImage: File;
  imgURL: string | ArrayBuffer;

  validatingForm: FormGroup;
  myDatePickerOptions: IMyOptions = SR_LOCATE
  editing: boolean;
  filter: EventFilter;

  loading: boolean;

  pageOptions: IEventsPageOptions;
  resultPage: EventsResultPage;

  constructor(private eventService: EventsService, private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.setTimeout();
    this.createForm();
    this.event = new Event();
    this.editing = false;
    this.filter = {};

    this.pageOptions = {...IResultPageOptionsInitial}
    let pageNum = 0;
    if (this.pageOptions.currentPage > 0) {
      pageNum = this.pageOptions.currentPage - 1;
    }
    this.loadEvents(pageNum, this.pageOptions.pageSize);
  }

  loadEvents(pageNum: number, pageSize: number) {
    this.eventService.getAll(pageNum, pageSize).subscribe(async data => {
      await this.populateResultPage(data);

      for (let i = 0; i < this.events.length; i++) {
        this.events[i] = await this.downloadImage(this.events[i]);
      }
      this.events.map(event => event.date = new Date(event.date));
    });
    window.scroll(0, 0);
  }

  private async populateResultPage(data: EventsResultPage): Promise<void> {
    this.resultPage = data;
    this.events = this.resultPage.content;
    this.pageOptions.currentPage = this.resultPage.number + 1;
  }

  setTimeout() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  async downloadImage(event: Event) {
    this.eventService.downloadPhoto(event._id).subscribe(photo => {
      var reader = new FileReader();
      reader.readAsDataURL(photo);
      reader.onload = () => {
        event.image = reader.result;
      };
    })
    return event;
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
      this.toastService.warning("Проверите да ли сте попунили обавезна поља");
      return;
    }
    if (!this.editing) {
      this.addNew();
    } else {
      this.edit();
    }
  }

  addNew() {
    this.eventService.create(this.createFormData(this.event)).subscribe(async savedEvent => {
      if (savedEvent) {
        savedEvent.date = new Date(savedEvent.date);
        if (this.selectedImage) {
          savedEvent.image = this.imgURL;
        }
        this.events = [savedEvent, ...this.events];
        this.closeDialog();
        this.toastService.success("Успешно сте направили нови догађај")
      } else {
        this.toastService.error("Дошло је до грешке приликом креирања новог догађаја. Покушајте поново")
      }
    })
  }

  createFormData(event: Event) {
    const formData = new FormData();
    formData.append('file', this.selectedImage);
    formData.append('title', event.title);
    formData.append('content', event.content);
    if (typeof event.date === 'string') {
      event.date = this.parseDate(event.date);
    }
    formData.append('date', event.date.toUTCString());
    return formData;
  }

  parseDate(date: string) {
    const parts = date.split('.');
    return new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
  }

  onImageUpload(file: UploadOutput | any): void {
    this.selectedImage = file[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedImage);
    reader.onload = () => {
      this.imgURL = reader.result;
      this.event.image = this.imgURL;
    };
  }

  closeDialog() {
    this.validatingForm.reset();
    this.selectedImage = null;
    this.imgURL = null;
    this.event = {};
    this.createModal.hide();
  }

  setEventForDelete(ev: Event) {
    this.eventToDelete = ev;
  }

  setEditEvent(ev: Event) {
    this.event = {...ev};
    this.editing = true;
    this.createModal.show();
  }

  remove() {
    this.eventService.delete(this.eventToDelete._id).subscribe(response => {
      if (response) {
        this.deleteFromArray(this.eventToDelete);
        this.toastService.success("Успешно сте обрисали догађај")
      } else {
        this.toastService.error("Дошло је до грешке приликом брисања догађаја. Покушајте поново")
      }
    }, () => {
      this.toastService.error("Дошло је до грешке приликом брисања догађаја. Покушајте поново")
    });
  }

  deleteFromArray(event: Event) {
    const idx: number = this.events.findIndex(item => item._id === event._id);
    if (idx !== -1) {
      this.events.splice(idx, 1);
      this.events = [...this.events]
    }
  }

  edit() {
    const formData = this.createFormData(this.event);
    this.eventService.edit(this.event._id, formData).subscribe(async editedEvent => {
      if (editedEvent) {
        editedEvent.image = this.event.image;
        if (this.selectedImage) {
          editedEvent = await this.downloadImage(editedEvent)
        }
        this.updateArray(editedEvent);
        this.toastService.success("Успешно сте изменили догађај")
        this.editing = false;
        this.closeDialog();
      } else {
        this.toastService.error("Дошло је до грешке приликом измене догађаја. Покушајте поново")
      }
    }, () => {
      this.toastService.error("Дошло је до грешке приликом измене догађаја. Покушајте поново")
    })
  }

  updateArray(editedEvent: Event) {
    const idx: number = this.events.findIndex(item => item._id === this.event._id);
    let newArray = [...this.events];
    editedEvent.date = new Date(editedEvent.date);
    newArray[idx] = editedEvent;
    this.events = newArray;
  }

  search() {
    console.log(this.filter)
  }

  onExpandText(event: Event) {
    this.event = event;
  }

  onCloseExpandText() {
    this.event = {};
  }

  async onPageChange($event: number): Promise<void> {
    if ($event < 1) {
      return;
    }
    this.loadEvents($event - 1, this.pageOptions.pageSize);
  }
}
