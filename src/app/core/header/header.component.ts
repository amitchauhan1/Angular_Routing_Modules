import { Component, OnInit } from '@angular/core';
import { CheckAuthService } from 'src/app/core/auth/check-auth.service';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private auth: CheckAuthService,
    private app: AppComponent,
    private router: Router
  ) { }

  ngOnInit() {
  }
  logOut() {
    this.app.flag = true;
    this.auth.logOut();
  }

  goEmp() {
    this.router.navigate(['employee']);
  }

  goDept() {
    this.router.navigate(['deparment']);
  }
  goTrainee() {
    this.router.navigate(['trainee']);
  }

  getElementById() {
    document.getElementById('main').style.marginLeft = '15%';
    document.getElementById('id01').style.display = 'block';
  }
  getElementById1() {
    document.getElementById('id01').style.display = 'none';
    document.getElementById('main').style.marginLeft = '0%';
  }
}
