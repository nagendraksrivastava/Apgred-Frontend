import { Injectable } from '@angular/core';
import { ApiEndPoints } from '../constants/api.endpoints'
import { HttpClient, HttpParams } from '@angular/common/http';

let active_users = "/activeuser/"

export interface ActiveUsers {
  weekly_active_user: number;
  daily_active_user: number;
  monthly_active_user: number;
}

@Injectable({
  providedIn: 'root'
})
export class ActiveusersService {

  constructor(private http: HttpClient) { }

  activeUsers(filterType: string) {
    let params = new HttpParams().set("active",filterType)
    return this.http.get<ActiveUsers>(ApiEndPoints.BASE_URL + active_users, { params: params });
  }
}
