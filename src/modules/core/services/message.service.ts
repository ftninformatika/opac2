import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ApiEndpointConfig} from "../../../config/api-endpoint.config";
import {Observable} from "rxjs";
import {Message, MessageSenderDTO} from "../../../models/admin/message.model";

@Injectable({
  providedIn: "root",
})
export class MessageService {
  private readonly _httpClient: HttpClient;

  public constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  getSenders(): Observable<MessageSenderDTO[]> {
    return this._httpClient.get(ApiEndpointConfig.Paths.admin.getSenders) as Observable<MessageSenderDTO[]>;
  }

  getMessagesByUsername(username: String): Observable<Message[]> {
    return this._httpClient.get(`${ApiEndpointConfig.Paths.admin.messages}/${username}`) as Observable<Message[]>;
  }

  sendMessage(message: Message) {
    return this._httpClient.post(ApiEndpointConfig.Paths.admin.addMessage, message);
  }
}
