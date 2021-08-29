import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../../../core/services/events.service";
import {Event} from "../../../../../models/admin/event.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IMyOptions} from "ng-uikit-pro-standard";
import {SR_LOCATE} from "../../../../../utils/consts";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: Event[];
  event: Event;

  validatingForm: FormGroup;
  myDatePickerOptions: IMyOptions = SR_LOCATE

  constructor(private eventService: EventsService) {
  }

  ngOnInit(): void {
    this.eventService.getAll().subscribe(data => {
      this.events = data;
      console.log(this.events);
    });

    this.createForm();
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
}
