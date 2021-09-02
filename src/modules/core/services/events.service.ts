import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiEndpointConfig} from "../../../config/api-endpoint.config";
import {Event} from "../../../models/admin/event.model";

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private readonly _httpClient: HttpClient;

  public constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  public getAll(): Observable<Event[]> {
    return this._httpClient.get(ApiEndpointConfig.Paths.admin.getEvents) as Observable<Event[]>;
  }

  public getById(eventId: string): Observable<Event> {
    return this._httpClient.get(`${ApiEndpointConfig.Paths.admin.getEvents}/${eventId}`) as Observable<Event>;
  }

  public create(formData: FormData) {
    return this._httpClient.post(ApiEndpointConfig.Paths.admin.createEvent, formData) as Observable<Event>;
  }

  public downloadPhoto(eventId: string) {
    return this._httpClient.get(`${ApiEndpointConfig.Paths.admin.downloadImage}/${eventId}`,
      {responseType: 'blob'}) as Observable<Blob>;
  }

  public delete(eventId: string): Observable<boolean> {
    return this._httpClient.delete(`${ApiEndpointConfig.Paths.admin.getEvents}/${eventId}`) as Observable<boolean>;
  }

  public edit(eventId: string, formData: FormData): Observable<Event>{
    return this._httpClient.put(`${ApiEndpointConfig.Paths.admin.getEvents}/${eventId}`, formData) as Observable<Event>;
  }

}
