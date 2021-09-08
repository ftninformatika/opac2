import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiEndpointConfig} from "../../../config/api-endpoint.config";
import {Faq} from "../../../models/admin/faq.model";

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  private readonly _httpClient: HttpClient;

  public constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  public getAll(): Observable<Faq[]> {
    return this._httpClient.get(ApiEndpointConfig.Paths.admin.faq + '/get') as Observable<Faq[]>;
  }

  public create(faq: Faq): Observable<Faq> {
    return this._httpClient.post(ApiEndpointConfig.Paths.admin.faq, faq) as Observable<Faq>;
  }

  public edit(faq: Faq): Observable<boolean> {
    return this._httpClient.put(ApiEndpointConfig.Paths.admin.faq, faq) as Observable<boolean>;
  }

  public delete(faqId: string): Observable<boolean> {
    return this._httpClient.delete(`${ApiEndpointConfig.Paths.admin.faq}/${faqId}`) as Observable<boolean>;
  }

}
