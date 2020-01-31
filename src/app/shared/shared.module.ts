import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { TableComponent } from './table/table.component';
import { AddModelComponent } from './add-model/add-model.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from './popup/popup.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './404/page-not-found/page-not-found.component';
import { HighlightDirective } from './Directive/highlight.directive';
import { MyIfDirective } from './Directive/my-if/my-if.directive';
import { IndianINRPipe } from './pipes/indian-inr.pipe';
import { DollerPipe } from './pipes/doller/doller.pipe';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [TableComponent, AddModelComponent, PopupComponent, PageNotFoundComponent, HighlightDirective, MyIfDirective, IndianINRPipe, DollerPipe],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [TableComponent, AddModelComponent, PopupComponent, PageNotFoundComponent, HighlightDirective, MyIfDirective, IndianINRPipe, DollerPipe]
})
export class SharedModule { }
