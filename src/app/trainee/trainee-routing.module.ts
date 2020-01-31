import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TraineeComponent } from './trainee/trainee.component';


const routes: Routes = [
  {
    path: '',
    component: TraineeComponent,
  },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'trainee'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraineeRoutingModule { }
