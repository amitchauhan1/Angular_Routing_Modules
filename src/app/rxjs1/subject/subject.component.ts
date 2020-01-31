import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line: new-parens
    const sub = new Subject;

    // add value in subject
    sub.next(1);
    sub.subscribe((data => {
      console.log(data);
    }));
    sub.next(2);
    sub.next(3);

    sub.subscribe((data => {
      console.log('After');
      console.log(data);
    }));
    sub.next(4);
  }
}
