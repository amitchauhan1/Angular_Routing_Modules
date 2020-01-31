import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss']
})
export class BehaviorSubjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const beh = new BehaviorSubject(123);

    // beh.next(1);
    beh.subscribe((data => {
      console.log(data);
    }));

    // This is get both subscriber
    beh.next(456);

    console.log('Last Data');
    beh.subscribe((data => {
      console.log(data);
    }));
    beh.next(12121);
    beh.next(11111);
  }

}
