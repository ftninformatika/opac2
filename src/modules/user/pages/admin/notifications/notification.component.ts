import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ModalDirective, ToastService} from "ng-uikit-pro-standard";
import {NotificationService} from "../../../../core/services/notification.service";
import {
  INotificationPageOptions,
  INotificationPageOptionsInitial,
  Notification, NotificationResultPage
} from "../../../../../models/admin/notification.model";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  @ViewChild('createModal', {static: true}) createModal: ModalDirective;

  notifications: Notification[];
  notificationForm: FormGroup;
  notification: Notification;

  pageOptions: INotificationPageOptions;
  resultPage: NotificationResultPage;

  constructor(private notificationService: NotificationService, private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.pageOptions = {...INotificationPageOptionsInitial}
    let pageNum = 0;
    if (this.pageOptions.currentPage > 0) {
      pageNum = this.pageOptions.currentPage - 1;
    }
    this.getAll(pageNum);
    this.createForm();
    this.notification = {};
  }

  getAll(pageNum: number) {
    this.notificationService.getAll(pageNum, this.pageOptions.pageSize).subscribe(data => {
      this.resultPage = data;
      this.notifications = this.resultPage.content;
      this.pageOptions.currentPage = this.resultPage.number + 1;
    });
  }

  createForm() {
    this.notificationForm = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
    });
  }

  get title() {
    return this.notificationForm.get('title');
  }

  get content() {
    return this.notificationForm.get('content');
  }

  onBtnCreteNewFaq() {
    this.notificationForm.reset();
    this.notification = {};
    this.createModal.show();
  }

  onBtnSaveFaq() {
    if (this.notificationForm.invalid) {
      this.toastService.warning("Наслов и садржај су обавезна поља");
      return;
    }
    this.add();
  }

  add() {
    this.notificationService.create(this.notification).subscribe(savedNotification => {
      if (savedNotification) {
        this.notifications = [savedNotification, ...this.notifications];
        this.createModal.hide();
        this.toastService.success("Успешно сте послали ново обавештење")
      } else {
        this.toastService.error("Дошло је до грешке приликом слања обавештења. Покушајте поново")
      }
    }, () => {
      this.toastService.error("Дошло је до грешке приликом слања обавештења. Покушајте поново")
    })
  }

  onPageChange($event) {
    if ($event < 1) {
      return;
    }
    this.getAll($event - 1);
  }
}
