import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiEndPoints } from '../constants/api.endpoints';

let get_all_feedback_url = "/getfeedback/"

export interface Status {
  message: string;
  code: number;
}

export interface Feedback {
  is_enabled: boolean;
  os_version: string;
  email: string;
  version_code: number;
  text: string;
  version_name: string;
  os: string;
  id: number;
  submited_date: string;
}

export interface GetFeedbackResponse {
  status: Status;
  feedback: Feedback[];
}

@Injectable({
  providedIn: 'root'
})
export class GetfeedbackService {

  constructor(private http: HttpClient) { }

  public getAllVersions(apptoken: string, category: string){
    return this.http.get<GetFeedbackResponse>(ApiEndPoints.FEEDBACK_URL + get_all_feedback_url,
      {
        params: {
          app_token: apptoken,
          category_param: category
        }
      });
  }
}
