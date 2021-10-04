import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ModalDirective, ToastService} from "ng-uikit-pro-standard";
import {NotificationService} from "../../../../core/services/notification.service";
import {
  INotificationPageOptions,
  INotificationPageOptionsInitial,
  Notification, NotificationResultPage
} from "../../../../../models/admin/notification.model";
import {UserState} from "../../../../core/states/user/user.state";
import {Store} from "@ngxs/store";
import {LoggedUser} from "../../../../../models/library-member.model";

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
  loggedAdmin: LoggedUser;

  pageOptions: INotificationPageOptions;
  resultPage: NotificationResultPage;

  constructor(private _store: Store, private notificationService: NotificationService, private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.setLoggedUser();
    this.pageOptions = {...INotificationPageOptionsInitial}
    let pageNum = 0;
    if (this.pageOptions.currentPage > 0) {
      pageNum = this.pageOptions.currentPage - 1;
    }
    this.getAll(pageNum);
    this.createForm();
    this.notification = {};
    this.notifications = [];
  }

  setLoggedUser(): void {
    this.loggedAdmin = new LoggedUser;
    this.loggedAdmin.username = this._store.selectSnapshot(UserState.username);
    this.loggedAdmin.firstName = this._store.selectSnapshot(UserState.firstname);
    this.loggedAdmin.lastName = this._store.selectSnapshot(UserState.lastname);
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
    this.setNotificationData();
    this.notificationService.send(this.notification).subscribe(savedNotification => {
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

  setNotificationData(): void {
    this.notification.type = "info";
    this.notification.sentDate = new Date();
    this.notification.sender = this.loggedAdmin.firstName + " " + this.loggedAdmin.lastName;
  }

  onPageChange($event) {
    if ($event < 1) {
      return;
    }
    this.getAll($event - 1);
  }
}
