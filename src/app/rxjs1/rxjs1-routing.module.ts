import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectComponent } from './subject/subject.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';


const routes: Routes = [
   // Using Rxjs Subject functionllity
   {
    path: 'rxjs-subject',
    component: SubjectComponent,
    data: { title: 'rxjs-subject' }
  },
  // Using Rxjs Behavior Subject functionllity
  {
    path: 'rxjs-behavior',
    component: BehaviorSubjectComponent,
    data: { title: 'rxjs-behavior', }
  },
  {
    path: '',
    redirectTo: 'rxjs-subject',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Rxjs1RoutingModule { }
