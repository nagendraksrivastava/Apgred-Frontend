import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  get(key: string) { let value = localStorage.getItem(key); return (value) ? JSON.parse(value) : ""; }

  set(key: string, value: any) { localStorage.setItem(key, JSON.stringify(value)); }

  remove(key: string){localStorage.removeItem(key);}

}
