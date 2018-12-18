import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { ApiEndPoints } from '../constants/api.endpoints';

let send_notification_url = "/sendnotification/"
let get_notification_settings = "/gnotisettings/"
let post_notification_settings = "/pnotisettings/"

export interface Status {
  code: number;
  message: string;
}

export interface SendNotificationResponse {
  status: Status;
}

export interface PostNotificationSettingsResponse {
  status: Status;
}

export interface Data {
  content: string;
  url: string;
  app_name: string;
  id: number;
  title: string;
}

export interface GetNotificationSettingsResponse {
  status: Status;
  data: Data;
}

@Injectable({
  providedIn: 'root'
})
export class SendnotificationService {

  constructor(private http: HttpClient) { }

  public sendNotification(apptoken: string, ids: number[]){
      return this.http.post<SendNotificationResponse>(ApiEndPoints.BASE_URL + send_notification_url, {
        app_token: apptoken,
        feedback_ids: ids,
      })
  }

  public postNotificationSettings(appToken: string, title: string, content: string){
    return this.http.post<PostNotificationSettingsResponse>(ApiEndPoints.NOTIFICATIONS_URL + post_notification_settings, {
      app_token: appToken,
      title: title,
      content: content
    })
  }

  public getNotificationSettings(appToken: string){
    return this.http.get<GetNotificationSettingsResponse>(ApiEndPoints.NOTIFICATIONS_URL + get_notification_settings,
      {
        params: {
          app_token: appToken
        }
      });
  }
}
