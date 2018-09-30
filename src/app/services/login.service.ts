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
  token: string;
  app_token: AppToken[];
  img_url: string;
  email: string;
  company_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

  login(username: string, password: string) {
    return this.http.post<LoginResponse>(ApiEndPoints.BASE_URL + login_endpoint, { email: username, password: password })
      .pipe(map(user => {
        if (user && user.token) {
          this.localStorageService.set('loggedInUser', user);
        }
      }));
  }

  logout() {
    // remove user from local storage to log user out
    this.localStorageService.remove('loggedInUser');
}

}
