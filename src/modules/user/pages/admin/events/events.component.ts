import {Component, OnInit, ViewChild} from '@angular/core';
import {EventsService} from "../../../../core/services/events.service";
import {Event} from "../../../../../models/admin/event.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IMyOptions, ModalDirective, UploadOutput} from "ng-uikit-pro-standard";
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

  constructor(private eventService: EventsService, private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.eventService.getAll().subscribe(data => {
      this.events = data;
      console.log(this.events);
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
}
