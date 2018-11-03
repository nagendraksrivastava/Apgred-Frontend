import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiEndPoints } from '../constants/api.endpoints';

let settings_url = "/settings/"

export interface Status {
  message: string;
  code: number;
}

export interface AppToken {
  app_token: string;
}

export interface Data {
  secret: string;
  app_token: AppToken[];
  is_banned: number;
}

export interface Settings {
  status: Status;
  data: Data;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http: HttpClient) { }

  public getSettings() {
    return this.http.get<Settings>(ApiEndPoints.BASE_URL + settings_url)
  }

}
