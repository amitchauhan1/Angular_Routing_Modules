import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/core/service/getData/get-data.service';

@Component({
  selector: 'app-trainee',
  templateUrl: './trainee.component.html',
  styleUrls: ['./trainee.component.scss']
})
export class TraineeComponent implements OnInit {
  data;
  constructor(
    private api: GetDataService
  ) { }

  ngOnInit() {
    //   this.api.getALL().subscribe((data => {
    //   console.log('data is', data);
    //   this.data = data;
    // }));
    this.data = this.api.getALL();
  }

}
