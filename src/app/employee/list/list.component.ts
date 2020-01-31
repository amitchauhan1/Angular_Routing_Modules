import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/core/service/getData/get-data.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-Emplist',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  data: object;
  constructor(
    private api: GetDataService,
  ) { }

  ngOnInit() {
    // this.api.getData().subscribe((data => {
    //   console.log('data is', data);
    //   this.data = data;
    // }));
    this.data = this.api.getData();
  }
  getElementById() {
    document.getElementById('popupId').style.display = 'block';
  }

}
