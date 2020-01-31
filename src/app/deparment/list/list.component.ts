import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/core/service/getData/get-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  data: object;
  id;
  constructor(
    private api: GetDataService
  ) { }

  ngOnInit() {
    // this.api.getData().subscribe((data => {
    //   console.log('data is', data);
    //   this.data = data;
    // }));
    this.data = this.api.getData();
  }

  getId($event) {
    console.log($event);
  }

}
