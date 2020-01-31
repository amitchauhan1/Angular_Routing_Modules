import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraineeRoutingModule } from './trainee-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TraineeComponent } from './trainee/trainee.component';


@NgModule({
  declarations: [TraineeComponent],
  imports: [
    CommonModule,
    TraineeRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports: [TraineeComponent]
})
export class TraineeModule { }
