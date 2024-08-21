import {Component, OnInit, ViewChild} from '@angular/core';
import {EventsService} from '../../../../core/services/events.service';
import {Event, EventFilter, IEventFilter} from '../../../../../models/admin/event.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {
  IMyOptions,
  ModalDirective,
  UploadOutput
} from 'ng-uikit-pro-standard';
import {SR_LOCATE} from '../../../../../utils/consts';
import {ToastService} from 'ng-uikit-pro-standard';
import {
  EventsResultPage,
  IEventsPageOptions,
  IResultPageOptionsInitial,
} from '../../../../../models/admin/events-page-options.model';
import {DateUtils} from '../../../../../utils/date.utils';
import {ArrayUtils} from '../../../../../utils/array.utils';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  @ViewChild('createModal') createModal: ModalDirective;
  events: Event[];
  event: Event;
  eventToDelete: Event;
  selectedImage: File;
  imgURL: string | ArrayBuffer;

  validatingForm: FormGroup;
  myDatePickerOptions: IMyOptions = SR_LOCATE;
  editing: boolean;
  filter: EventFilter;
  isFiltered: boolean;

  loading: boolean;
  noEvents: boolean;

  pageOptions: IEventsPageOptions;
  resultPage: EventsResultPage;

  constructor(private eventService: EventsService, private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.noEvents = false;
    this.setTimeout();
    this.createForm();
    this.event = new Event();
    this.editing = false;
    this.filter = {...IEventFilter};
    this.isFiltered = false;
    this.pageOptions = {...IResultPageOptionsInitial};
    let pageNum = 0;
    if (this.pageOptions.currentPage > 0) {
      pageNum = this.pageOptions.currentPage - 1;
    }
    this.getAll(pageNum, this.pageOptions.pageSize);
  }

  setTimeout() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  getAll(pageNum: number, pageSize: number) {
    this.eventService.getAll(pageNum, pageSize).subscribe(async data => {
      await this.populatePageAndDownloadImages(data);
      if (data.content.length === 0) {
        this.noEvents = true;
      } else {
        this.isFiltered = false;
        this.noEvents = false;
      }
    });
  }

  private async populatePageAndDownloadImages(data: EventsResultPage) {
    await this.populateResultPage(data);

    for (let i = 0; i < this.events.length; i++) {
      this.events[i] = await this.downloadImage(this.events[i]);
    }
    this.events.map(event => event.date = new Date(event.date));
    this.events.map(event => event.time = event.date.toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute: '2-digit'
    }));
    window.scroll(0, 0);
  }

  private async populateResultPage(data: EventsResultPage): Promise<void> {
    this.resultPage = data;
    this.events = this.resultPage.content;
    this.pageOptions.currentPage = this.resultPage.page.number + 1;
  }

  async downloadImage(event: Event) {
    this.eventService.downloadPhoto(event._id).subscribe(photo => {
      const reader = new FileReader();
      reader.readAsDataURL(photo);
      reader.onload = () => {
        event.image = reader.result;
      };
    });
    return event;
  }

  createForm() {
    const urlRegex = '(https?://|www).+';

    this.validatingForm = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      time: new FormControl(''),
      location: new FormControl(''),
      link: new FormControl('', Validators.pattern(urlRegex)),
      linkName: new FormControl('')
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

  get link() {
    return this.validatingForm.get('link');
  }

  onBtnCreateEvent() {
    if (this.validatingForm.invalid) {
      this.toastService.warning($localize`:@@proveriteDaLiSteIspravnoPopunili:Проверите да ли сте исправно попунили сва обавезна поља`);
      return;
    }
    if (!this.editing) {
      this.addNew();
    } else {
      this.edit();
    }
  }

  addNew() {    // todo: reset paginatora this.onPageChange(1);
    this.eventService.create(this.createFormData(this.event)).subscribe(async savedEvent => {
      if (savedEvent) {
        savedEvent.date = new Date(savedEvent.date);
        savedEvent.time = savedEvent.date.toLocaleTimeString(navigator.language, {hour: '2-digit', minute: '2-digit'});
        if (this.selectedImage) {
          savedEvent.image = this.imgURL;
        }
        this.events = [savedEvent, ...this.events];
        this.closeDialog();
        this.toastService.success($localize`:@@uspesnoSteNapravliDesavanje:Успешно сте направили ново дешавање`);
      } else {
        this.toastService.error($localize`:@@greskaPrilikomKreiranjaDesavanja:Дошло је до грешке приликом креирања новог дешавања. Покушајте поново.`);
      }
    });
  }

  createFormData(event: Event) {
    const formData = new FormData();
    formData.append('file', this.selectedImage);
    formData.append('title', event.title);
    formData.append('content', event.content);
    if (!event.time) {
      event.time = '23:59';
    }
    event.date = DateUtils.convertStringToDate(event.date, event.time);
    formData.append('date', event.date.toUTCString());
    if (event.location) {
      formData.append('location', event.location);
    }
    if (event.link) {
      formData.append('link', event.link);
    }
    if (event.linkName) {
      formData.append('linkName', event.linkName);
    }
    return formData;
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

  setEditEvent(ev: Event) {
    this.event = {...ev};
    this.editing = true;
    this.createModal.show();
  }

  edit() {
    const formData = this.createFormData(this.event);
    this.eventService.edit(this.event._id, formData).subscribe(async editedEvent => {
      if (editedEvent) {
        editedEvent = await this.setImage(editedEvent);
        editedEvent.date = new Date(editedEvent.date);
        editedEvent.time = editedEvent.date.toLocaleTimeString(navigator.language, {
          hour: '2-digit',
          minute: '2-digit'
        });
        this.events = ArrayUtils.updateArray(editedEvent, this.events);
        this.toastService.success($localize`:@@uspesnoSteIzmeniliDesavanje:Успешно сте изменили дешавање`);
        this.closeDialog();
      } else {
        this.toastService.error($localize`:@@greskaPrikomIzmeneDesavanja:Дошло је до грешке приликом измене дешавања. Покушајте поново.`);
      }
    }, () => {
      this.toastService.error($localize`:@@greskaPrikomIzmeneDesavanja:Дошло је до грешке приликом измене дешавања. Покушајте поново.`);
    });
  }

  private async setImage(editedEvent: Event) {
    editedEvent.image = this.event.image;
    if (this.selectedImage) {
      editedEvent = await this.downloadImage(editedEvent);
    }
    return editedEvent;
  }

  setEventForDelete(ev: Event) {
    this.eventToDelete = ev;
  }

  remove() {    // todo: reset paginatora
    this.eventService.delete(this.eventToDelete._id).subscribe(response => {
      if (response) {
        this.events = ArrayUtils.deleteItemFromArray(this.eventToDelete, this.events);
        this.toastService.success($localize`:@@uspesnoSteObrisaliDesavanje:Успешно сте обрисали дешавање`);
      } else {
        this.toastService.error($localize`:@@greskaPrikomBrisanjaDesavanja:Дошло је до грешке приликом брисања дешавања. Покушајте поново.`);
      }
    }, () => {
      this.toastService.error($localize`:@@greskaPrikomBrisanjaDesavanja:Дошло је до грешке приликом брисања дешавања. Покушајте поново.`);
    });
  }

  async onPageChange($event: number): Promise<void> {
    if ($event < 1) {
      return;
    }
    if (this.isFiltered && !(!this.filter.from && !this.filter.to && !this.filter.searchText)) {
      this.searchEvents($event - 1, this.pageOptions.pageSize);
    } else {
      this.getAll($event - 1, this.pageOptions.pageSize);
    }
  }

  searchEvents(pageNum: number, pageSize: number) {
    if (this.filter.from) {
      this.filter.from = DateUtils.convertStringToDate(this.filter.from, '00:00');
    }
    if (this.filter.to) {
      this.filter.to = DateUtils.convertStringToDate(this.filter.to, '23:59');
    }
    if (this.filter.from > this.filter.to) {
      this.toastService.error($localize`:@@datumPocetkaPreDatumaZavrsetka:Датум почетка мора да буде пре датума завршетка`);
      return;
    }
    this.loading = true;
    this.isFiltered = true;
    this.search(pageNum, pageSize);
  }

  search(pageNum: number, pageSize: number) {
    this.eventService.search(this.filter, pageNum, pageSize).subscribe(async data => {
      await this.populatePageAndDownloadImages(data);
      this.noEvents = data.content.length === 0;
      this.loading = false;
    });
  }

  onExpandText(event: Event) {
    this.event = event;
  }

  onCloseExpandText() {
    this.event = {};
  }

  closeDialog() {
    this.validatingForm.reset();
    this.selectedImage = null;
    this.imgURL = null;
    this.event = {};
    this.createModal.hide();
    this.editing = false;
  }

  isLinkCreated(event: Event): boolean {
    return (event.link !== null && event.link !== undefined);
  }

  isLocationCreated(event: Event): boolean {
    return (event.location !== null && event.location !== undefined);
  }
}
