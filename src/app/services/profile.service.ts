import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiEndPoints } from '../constants/api.endpoints';

let profile_url = "/profile/"

export interface CompanyProfile {
  city: string;
  company_name: string;
  address: string;
  company_url: string;
  country: string;
  logo_url: string;
  pincode: number;
  locality: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  public getCompanyProfile(){
    return this.http.get<CompanyProfile>(ApiEndPoints.BASE_URL + profile_url)
  }
}
