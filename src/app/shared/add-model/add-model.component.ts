import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/core/service/getData/get-data.service';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from 'src/app/core/IEmployee';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.scss']
})
export class AddModelComponent implements OnInit {
  obj: object;
  alldata;
  constructor(
    private api: GetDataService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private http: HttpClient
  ) { }
  id;
  employee = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
  });

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.id = this.route.snapshot.paramMap.get('id');
      this.api.getSingleData(this.id).subscribe((data => {
        this.alldata = data;
        this.employee.setValue({
          name: this.alldata.name,
          email: this.alldata.email,
          phone: this.alldata.phone
        });
      }));
    }
  }

  get name() { return this.employee.get('name'); }
  get email() { return this.employee.get('email'); }
  get phone() { return this.employee.get('phone'); }

  onSubmit() {
    this.obj = {
      name: this.employee.get('name').value,
      email: this.employee.get('email').value,
      phone: this.employee.get('phone').value
    };
    if (this.id) {
      this.api.update(this.id, this.obj);
    } else {
      this.api.saveData(this.obj);
    }

  }

}
