import { ApiEndpointConfig } from "../../../config/api-endpoint.config";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICoder } from "../../../models/coders/coder.model";

@Injectable({
  providedIn: "root",
})
export class CodersService {
  private readonly _httpClient: HttpClient;

  public constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  public getSubLocationCoders(lib: string): Observable<ICoder[]> {
    return this._httpClient.get(
      `${ApiEndpointConfig.Paths.coders.subLocations}?libName=${lib}`
    ) as Observable<ICoder[]>;
  }

  public getSubLocationCoder(coderId: string, lib: string): Observable<ICoder> {
    return this._httpClient.get(
      `${ApiEndpointConfig.Paths.coders.subLocations}/get_by_coder_id?lib=${lib}&coderId=${coderId}`
    ) as Observable<ICoder>;
  }
}
