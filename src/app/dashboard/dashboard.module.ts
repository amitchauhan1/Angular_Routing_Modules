import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { TraineeModule } from '../trainee/trainee.module';
import { EmployeeModule } from '../employee/employee.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    TraineeModule,
    EmployeeModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
