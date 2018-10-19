import { Injectable } from '@angular/core';
import { ApiEndPoints } from '../constants/api.endpoints'
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { map } from 'rxjs/operators';

let version_management_endpoint = "/allversion/";


export interface VersionDetail {
  version_name: string;
  is_production: boolean;
  is_enabled: boolean;
  version_code: number;
  app_name: string;
  package_name: string;
}

export interface VersionDetails {
  version_details: VersionDetail[];
}

@Injectable({
  providedIn: 'root'
})
export class VersionmanagementService {

  constructor(private http: HttpClient) { }

  getAppVersions(appToken: string) {
    return this.http.get<VersionDetails>(ApiEndPoints.BASE_URL + version_management_endpoint, {
      params: {
        app_token: appToken
      }
    })
  }
}
