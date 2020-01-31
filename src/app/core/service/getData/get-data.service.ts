import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApisService } from '../../API/apis.service';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  baseURL: string;
  baseURL1: string;
  constructor(
    private router: Router,
    private http: HttpClient,
    private API: ApisService,
  ) {
    this.baseURL = this.API.apiEmployee;
    this.baseURL1 = this.API.apiTrainee;
  }


  getData() {
    return this.http.get(this.baseURL);
  }
  getSingleData(id) {
    return this.http.get(this.baseURL + id);
  }
  getALL() {
    return this.http.get(this.baseURL1);
  }

  update(id, allData) {
    return this.http.put(this.baseURL + id, allData).subscribe((data => {
      this.router.navigate(['employee']);
    }));
  }

  deleteRecord(id: number) {
    return this.http.delete(this.baseURL + id).subscribe((data => {
      this.router.navigate(['employee']);
    }));
  }

  saveData(edata) {
    this.http.post(this.baseURL, edata).subscribe((data => {
      this.router.navigate(['employee']);
    }));
  }
}
