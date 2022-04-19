import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from './shared/shared.service';
import { LoginComponent } from './user-req/login/login.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardGuard implements CanActivate {
  constructor(private _serv: SharedService, private _route: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this._serv.getUserId() == "") {
      this._route.navigate(['/']);
      return false;
    }
    else {
      return true;
    }
  }

}
