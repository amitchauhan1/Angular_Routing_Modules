import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Rxjs1RoutingModule } from './rxjs1-routing.module';
import { SubjectComponent } from './subject/subject.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SubjectComponent, BehaviorSubjectComponent],
  imports: [
    CommonModule,
    Rxjs1RoutingModule,
    SharedModule
  ],
  exports: [SubjectComponent, BehaviorSubjectComponent],
})
export class Rxjs1Module { }
