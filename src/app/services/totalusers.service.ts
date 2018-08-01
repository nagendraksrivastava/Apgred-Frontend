import { Injectable } from '@angular/core';

export class Data {
  total_user: number = 4200;
}

@Injectable({
  providedIn: 'root'
})
export class TotalusersService {
  constructor() { }

  get totalUsers(): number {
    var data = new Data();
    var total = data.total_user = 4200;
    return total;
  }
}
