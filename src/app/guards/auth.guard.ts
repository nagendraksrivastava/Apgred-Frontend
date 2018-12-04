import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Promise } from '../../../node_modules/@types/q';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private localStorageService: LocalStorageService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.localStorageService.get('loggedInUser')) {
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
