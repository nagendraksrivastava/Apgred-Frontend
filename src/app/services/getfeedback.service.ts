import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiEndPoints } from '../constants/api.endpoints';

let get_all_feedback_url = "/getfeedback/"
let get_feedback_categories = "/getfeedbackcatgry/"
let post_feedback_category = "/postfeedbackcatgry/"

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

export interface CategoryList {
  id: number;
  name: string;
}

export interface GetCategoriesResponse {
  status: Status;
  category_list: CategoryList[];
}

export interface PostCategoryResponse {
  status: Status;
}

@Injectable({
  providedIn: 'root'
})
export class GetfeedbackService {

  constructor(private http: HttpClient) { }

  public getAllVersions(apptoken: string, category: string) {
    return this.http.get<GetFeedbackResponse>(ApiEndPoints.FEEDBACK_URL + get_all_feedback_url,
      {
        params: {
          app_token: apptoken,
          category_param: category
        }
      });
  }

  public getAllCategories(apptoken: string) {
    return this.http.get<GetCategoriesResponse>(ApiEndPoints.FEEDBACK_URL + get_feedback_categories,
      {
        params: {
          app_token: apptoken
        }
      })
  }

  public postCategory(appToken: string, category: string, isEnabled: boolean) {
      return this.http.post<PostCategoryResponse>(ApiEndPoints.FEEDBACK_URL + post_feedback_category,
      {
        app_token: appToken,
        category_text: category,
        is_enabled: isEnabled
      })
  }
}
