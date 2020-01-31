import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckAuthService } from '../auth/check-auth.service';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  public registerForm: FormGroup;
  public flag: boolean;
  public data: object;
  public loading: boolean;
  // send data from register.
  obj: any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: CheckAuthService
  ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      pass: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      cPass: ['', [Validators.required]],
    });
    this.registerForm.valueChanges.subscribe(field => {
      if (field.pass !== field.cPass) {
        this.f.cPass.setErrors({ mismatch: true });
      } else {
        this.f.cPass.setErrors(null);
      }
    });
  }
  // // Check password Confirm Validation...., {validators: this.confirmPssword}
  // confirmPssword(group: FormGroup) {
  //   let pass: string = group.get('pass').value;
  //   let cPass: string = group.get('cPass').value;

  //   return pass === cPass ? null : { notMatch: true };
  // }
  // get username() {
  //   return this.registerForm.get('username');
  // }
  // get pass() {
  //   return this.registerForm.get('pass');
  // }
  // get cPass() {
  //   return this.registerForm.get('cPass');
  // }

  // intance of registerForm
  get f() { return this.registerForm.controls; }

  ngOnInit() {
  }

  onSubmit() {
    this.obj = {
      username: this.f.username.value,
      password: this.f.pass.value,
    },
      this.auth.addData(this.obj);
    if (this.obj) {
      this.router.navigate(['login']);
    }
  }
}
