import { Injectable } from '@angular/core';
import { ApiEndPoints } from '../constants/api.endpoints'
import { HttpClient } from '@angular/common/http';

let total_users_endpoint = "/totaluser/"

export interface TotalUsers {
  total_user: number;
}

@Injectable({
  providedIn: 'root'
})
export class TotalusersService {
  constructor(private http: HttpClient) { }

  totalUsers(appToken: string) {
    return this.http.get<TotalUsers>(ApiEndPoints.BASE_URL + total_users_endpoint,
      {
        params: {
          app_token: appToken
        }
      });
  }
}
