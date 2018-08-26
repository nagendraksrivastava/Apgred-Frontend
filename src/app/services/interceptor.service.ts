import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApgredRequestInterceptor implements HttpInterceptor {

  constructor(private localStorageService: LocalStorageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let loggedInUser = this.localStorageService.get('loggedInUser');
    if (loggedInUser && loggedInUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `${loggedInUser.token}`,
        }
      });
    }
    return next.handle(request);
  }
}
