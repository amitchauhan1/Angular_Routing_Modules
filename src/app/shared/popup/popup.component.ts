import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  id1;
  constructor(
    private loc: Location
  ) {
  }
  @Input() data;
  ngOnInit() {
    console.log('faaaaaa', this.data);
  }

  getElementById1() {

    document.getElementById('popupId').style.display = 'none';
    this.loc.back();
  }
}
