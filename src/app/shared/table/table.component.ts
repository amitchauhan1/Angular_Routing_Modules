import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CheckAuthService } from '../../core/auth/check-auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GetDataService } from 'src/app/core/service/getData/get-data.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  name: string;
  constructor(
    private auth: CheckAuthService,
    private router: Router,
    private api: GetDataService,
  ) {
    this.name = this.auth.name;
  }
  @Input() data: object;
  @Input() setting: string;
  doEdit(id) {
    this.router.navigate([`${this.router.url}`, id]);
    document.getElementById('popupId').style.display = 'block';
  }

  doDelete(id) {
    if (confirm('Do want to delete?')) {
      this.api.deleteRecord(id);
    }
  }
  // { relativeTo: this.route, skipLocationChange: true }
  ngOnInit() {
  
  }

}
