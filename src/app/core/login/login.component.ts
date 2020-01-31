import { Component, OnInit } from '@angular/core';
import { CheckAuthService } from 'src/app/core/auth/check-auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public profileForm: FormGroup;
  public flag: boolean;
  public data: object;
  public loading: boolean;
  constructor(
    private auth: CheckAuthService,
    private router: Router,
    private fb: FormBuilder,
    private app: AppComponent
  ) {
    this.profileForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      pass: [''],
    });

  }


  ngOnInit() {
  }

  goRegister() {
    this.router.navigate(['/register']);
  }
  get username() {
    return this.profileForm.get('username');
  }
  get pass() {
    return this.profileForm.get('pass');
  }
  onSubmit() {
    localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9');
    this.auth.checkLogin(this.username.value).subscribe((datas => {
      this.loading = true;
      this.data = datas;
      console.log(this.data);
      if (this.data[0].password === this.pass.value) {
        localStorage.setItem('userPermision', 'true');
        console.log(this.data);
        this.app.flag = true;
        this.loading = false;
        this.router.navigate(['dashboard']);
      } else {
        alert('Wrong Username & Password');
        console.log(this.data);
        this.loading = false;
        this.app.flag = false;
        this.router.navigate(['login']);
      }
    }));
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

}
