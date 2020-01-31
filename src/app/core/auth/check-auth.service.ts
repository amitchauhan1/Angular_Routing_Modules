import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApisService } from '../API/apis.service';

@Injectable({
  providedIn: 'root'
})
export class CheckAuthService {
  public token: string;
  public name: string;
  public userData: string;
  constructor(
    private router: Router,
    private http: HttpClient,
    private API: ApisService,
  ) {
    this.userData = this.API.apiUser;
  }
  checkLogin(username: string): Observable<any> {
    return this.http.get<any>(`${this.userData}?username=${username}`);
  }
  checkPermission() {
    if (localStorage.getItem('userPermision') === 'true') {

      return true;
    }
    return false;
  }

  addData(data) {
    this.http.post(this.userData, data).subscribe((d => {
      console.log('save');

    }));
  }
  getToken() {
    return localStorage.getItem('token');
  }
  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('userPermision');
    this.router.navigate(['login']);
  }
}
