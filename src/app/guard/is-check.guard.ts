import { Injectable } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { CheckAuthService } from '../core/auth/check-auth.service';
import { ListComponent } from '../employee/list/list.component';

@Injectable({
  providedIn: 'root'
})
export class IsCheckGuard implements CanActivate, CanActivateChild, CanLoad {
  isAuthenticated: boolean;
  constructor(
    private auth: CheckAuthService,
  ) {
    this.isAuthenticated = true;
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const name = next.data.name;
    if (this.auth.checkPermission() === true) {
      return true;
    }
    return false;

  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.checkPermission() === true) {
      return true;
    }
    return false;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.checkPermission() === true) {
      return true;
    }
    return false;
  }
  canDeactivate(
    component: ListComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (confirm('Do you want Exit ?')) {
      return true;
    } else {
      return false;
    }
  }

}
