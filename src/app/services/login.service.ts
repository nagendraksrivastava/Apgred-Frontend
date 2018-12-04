import { Injectable } from '@angular/core';
import { ApiEndPoints } from '../constants/api.endpoints'
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { map } from 'rxjs/operators';

let login_endpoint = "/login/";

export interface AppToken {
  app_token: string;
}

export interface LoginResponse {
  company_logo: string;
  token: string;
  company_name: string;
  app_logo?: any;
  app_token: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

  login(username: string, password: string) {
    return this.http.post<LoginResponse[]>(ApiEndPoints.BASE_URL + login_endpoint,
      {
        email: username,
        password: password
      })
      .pipe(map(user => {
        console.log(user)
        if (user[0] && user[0].token) {
          this.localStorageService.set('loggedInUser', user[0]);
        }
      }));
  }

  logout() {
    // remove user from local storage to log user out
    this.localStorageService.remove('loggedInUser');
  }

}
