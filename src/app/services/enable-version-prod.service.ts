import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VersionDetail } from './versionmanagement.service';
import { ApiEndPoints } from '../constants/api.endpoints';

let enable_version_endpoint = "/enabledisableversion/"
let set_is_prod_endpoint = "/enabledisableprod/"

export interface Status {
  message: string;
  code: number;
}

export interface EnableVersionResponse {
  status: Status;
}

@Injectable({
  providedIn: 'root'
})
export class EnableVersionProdService {

  constructor(private http: HttpClient) { }

  public enableVersion(app_token: string, version: VersionDetail) {
    return this.http.post<EnableVersionResponse>(ApiEndPoints.BASE_URL + enable_version_endpoint,
      {
        app_token: app_token,
        version_name: version.version_name,
        version_code: version.version_code,
        is_enable: version.is_enabled
      })
  }

  public enableIsProduction(app_token: string, version: VersionDetail) {
    return this.http.post<EnableVersionResponse>(ApiEndPoints.BASE_URL + set_is_prod_endpoint,
      {
        app_token: app_token,
        version_name: version.version_name,
        version_code: version.version_code,
        is_production: version.is_production
      })
  }
}
