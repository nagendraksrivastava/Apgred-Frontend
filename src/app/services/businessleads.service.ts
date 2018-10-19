import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiEndPoints } from '../constants/api.endpoints';

let business_leads_endpoint = "/businesslead/"

export interface BusinessLeadResponse {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class BusinessleadsService {

  constructor(private http: HttpClient) { }

  public businessLead(email_address: string, phone: string){
     return this.http.post<BusinessLeadResponse>(ApiEndPoints.BASE_URL + business_leads_endpoint,
      {
        email: email_address,
        phone_number: phone
      })
  }
}
