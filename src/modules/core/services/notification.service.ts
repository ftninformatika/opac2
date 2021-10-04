import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FAQResultPage} from "../../../models/admin/faq.model";
import {ApiEndpointConfig} from "../../../config/api-endpoint.config";
import {Notification, NotificationResultPage} from "../../../models/admin/notification.model";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private readonly _httpClient: HttpClient;

  public constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  public getAll(pageNum: number, pageSize: number): Observable<NotificationResultPage> {
    return this._httpClient.get(`${ApiEndpointConfig.Paths.admin.notifications}/all?pageNumber=${pageNum}&pageSize=${pageSize}`) as Observable<NotificationResultPage>;
  }

  public send(notification: Notification): Observable<Notification> {
    return this._httpClient.post(ApiEndpointConfig.Paths.admin.notifications + "/send", notification) as Observable<Notification>;
  }
}
