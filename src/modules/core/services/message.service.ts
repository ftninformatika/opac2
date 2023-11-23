import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiEndpointConfig} from '../../../config/api-endpoint.config';
import {Observable} from 'rxjs';
import {Message, MessageDTO, MessageSenderDTO} from '../../../models/admin/message.model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private readonly _httpClient: HttpClient;

  public constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  getSenders(): Observable<MessageSenderDTO[]> {
    return this._httpClient.get(ApiEndpointConfig.Paths.admin.getSenders) as Observable<MessageSenderDTO[]>;
  }

  getLibrarianEmail() {
    return this._httpClient.get(ApiEndpointConfig.Paths.admin.getLibrarianMail);
  }

  saveLibrarianEmail(email: string) {
    return this._httpClient.post(ApiEndpointConfig.Paths.admin.getLibrarianMail, email);
  }

  getMessagesByUsername(username: string): Observable<MessageDTO[]> {
    return this._httpClient.get(`${ApiEndpointConfig.Paths.admin.messages}/${username}`) as Observable<MessageDTO[]>;
  }

  sendMessage(message: Message) {
    return this._httpClient.post(ApiEndpointConfig.Paths.admin.addMessage, message);
  }
}
