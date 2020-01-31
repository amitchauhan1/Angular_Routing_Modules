import { Component } from '@angular/core';
import { CheckAuthService } from './core/auth/check-auth.service';
import { IsCheckGuard } from './guard/is-check.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Routing-Modules';
  flag: boolean;
  constructor(
    private ser: IsCheckGuard
  ) {
    this.flag = false;
    console.log(this.flag);
  }

  getElementById1() {
    document.getElementById('id01').style.display = 'none';
    document.getElementById('main').style.marginLeft = '0%';
  }
}
