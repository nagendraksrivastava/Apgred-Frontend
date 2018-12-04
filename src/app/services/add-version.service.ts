import { Injectable } from '@angular/core';
import { ApiEndPoints } from '../constants/api.endpoints'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

let add_version_endpoint = "/addversion/"

export interface Status {
  message: string;
  code: number;
}

export interface AddVersionResponse {
  status: Status;
}

@Injectable({
  providedIn: 'root'
})
export class AddVersionService {

  constructor(private http: HttpClient) { }

  public addVersion(appToken: string, versionName: string, versionCode: string, isProduction: boolean, isEnabled: boolean, releaseNotes: string) {
    console.log(releaseNotes)
    return this.http.post<AddVersionResponse>(ApiEndPoints.BASE_URL + add_version_endpoint,
      {
        app_token: appToken,
        version_name: versionName,
        version_code: versionCode,
        is_production: isProduction,
        is_enabled: isEnabled,
        release_notes: releaseNotes
      })
  }
}
