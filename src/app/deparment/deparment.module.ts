import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeparmentRoutingModule } from './deparment-routing.module';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    DeparmentRoutingModule,
    SharedModule
  ],
  exports: [ListComponent]
})
export class DeparmentModule { }
