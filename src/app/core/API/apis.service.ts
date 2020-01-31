import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApisService {
  // Devlopment
  public apiEmployee = environment.BASE_URL + 'Employee/';
  public apiUser = environment.BASE_URL + 'Users/';
  public apiTrainee = environment.BASE_URL + 'Trainee/';
}
