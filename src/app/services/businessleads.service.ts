import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiEndPoints } from '../constants/api.endpoints';
import CryptoJS from 'crypto-js';
import { LocalStorageService } from './local-storage.service';

let business_leads_endpoint = "/businesslead/"

export interface BusinessLeadResponse {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class BusinessleadsService {

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

  public businessLead(email_address: string, phone: string) {
    let loggedInUser = this.localStorageService.get('loggedInUser');
    if (loggedInUser && loggedInUser.token) {
      this.localStorageService.remove(loggedInUser)
    }
    let items: Array<string> = [];
    items.push(email_address)
    items.push(phone)
    items.reverse()
    var crypt: string = items.join(' ')
    var hash = CryptoJS.SHA1(crypt);
    let digest = CryptoJS.enc.Hex.stringify(hash);
    let httpHeaders = new HttpHeaders().set('HASH', digest);
    return this.http.post<BusinessLeadResponse>(ApiEndPoints.BASE_URL + business_leads_endpoint,
      {
        email: email_address,
        phone_number: phone
      },
      {
        headers: httpHeaders
      })
  }
}
