import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  breadcrumbs: any[];
  title;
  constructor(
    private app: AppComponent,
    private route: ActivatedRoute,
  ) {
    this.app.flag = false;
  }

  ngOnInit() {
  }

}
