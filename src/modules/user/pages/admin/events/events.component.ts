import {ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {EventsService} from "../../../../core/services/events.service";
import {Event} from "../../../../../models/admin/event.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {
  IMyOptions,
  MdbTableDirective,
  MdbTablePaginationComponent,
  ModalDirective,
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
  @ViewChild('modalDialog') public modalDialog: ModalDirective;

  events: Event[];
  event: Event;
  selectedImage: File;
  imgURL: string | ArrayBuffer;

  validatingForm: FormGroup;
  myDatePickerOptions: IMyOptions = SR_LOCATE

  // table
  @ViewChild(MdbTableDirective, {static: true}) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, {static: true}) mdbTablePagination: MdbTablePaginationComponent;

  headElements = ['', 'Наслов', 'Садржај', 'Датум', '', ''];
  sortFields = ['', 'title', 'content', 'date',];

  searchText: string = '';
  previous: string;
  maxVisibleItems: number = 8;

  constructor(private eventService: EventsService, private toastService: ToastService, private cdRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.eventService.getAll().subscribe(data => {
      this.events = data;
      console.log(this.events);
      const date = new Date();
      this.events = [];
      for (let i = 1; i <= 25; i++) {
        this.events.push({title: 'Naslov ' + i.toString(), content: 'Sadrzaj ' + i, date: date});
      }

      this.mdbTable.setDataSource(this.events);
      this.events = this.mdbTable.getDataSource();
      this.previous = this.mdbTable.getDataSource();
    });

    this.createForm();
    this.event = new Event();
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
      const formData = new FormData();
      formData.append('file', this.selectedImage);

      console.log(this.event)
      this.toastService.success("Успешно сте направили нови догађај")
      this.closeDialog();
      // this.eventService.create(this.event, formData)
    }
  }

  closeDialog() {
    this.validatingForm.reset();
    this.modalDialog.hide();
    this.selectedImage = null;
    this.imgURL = null;
  }

  onImageUpload(file: UploadOutput | any): void {
    this.selectedImage = file[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedImage);
    reader.onload = () => {
      this.imgURL = reader.result;
    };
  }


  @HostListener('input') oninput() {
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

  remove(ev: Event) {
  }
}
