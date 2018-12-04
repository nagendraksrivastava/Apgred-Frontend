import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiEndPoints } from '../constants/api.endpoints';

let update_version_endpoint = "/appupdate/"

export interface Status {
  message: string;
  code: number;
}

export interface UpdateVersionResponse {
  status: Status;
}

@Injectable({
  providedIn: 'root'
})
export class UpdateVersionService {

  constructor(private http: HttpClient) { }

  public updateVersion(updateType: string, versionName: string, versionCode: number,
    title: string, message: string, positiveText: string, negativeText: string,
    appToken: string, percentage: string, individualUpdate: boolean) {
    return this.http.post<UpdateVersionResponse>(ApiEndPoints.BASE_URL + update_version_endpoint, {
      update_type: updateType,
      version_name: versionName,
      version_code: versionCode,
      title: title,
      message: message,
      positive_button_text: positiveText,
      negative_button_text: negativeText,
      app_token: appToken,
      percentage: percentage,
      individual_update: individualUpdate
    })
  }
}
