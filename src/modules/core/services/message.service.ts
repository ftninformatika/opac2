import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ApiEndpointConfig} from "../../../config/api-endpoint.config";
import {Observable} from "rxjs";
import {LibraryMemberCard} from "../../../models/library-member.model";
import {Message} from "../../../models/admin/message.model";

@Injectable({
  providedIn: "root",
})
export class MessageService {
  private readonly _httpClient: HttpClient;

  public constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  getSenders(): Observable<LibraryMemberCard[]> {
    return this._httpClient.get(ApiEndpointConfig.Paths.admin.getSenders) as Observable<LibraryMemberCard[]>;
  }

  getMessagesByUsername(username: String): Observable<Message[]> {
    return this._httpClient.get(`${ApiEndpointConfig.Paths.admin.messages}/${username}`) as Observable<Message[]>;
  }
}
