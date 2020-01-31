import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { IsCheckGuard } from '../guard/is-check.guard';
import { AddModelComponent } from '../shared/add-model/add-model.component';

const routes: Routes = [
  {
    path: '', component: ListComponent,
    canDeactivate : [IsCheckGuard],
    children: [
      {
        path: 'add',
         component: AddModelComponent,
        // outlet: 'secondRouter',
        data: {
          title: 'Add',
          breadcrumb: 'Add',
        },
      },
      {
        path: ':id',
         component: AddModelComponent,
        // outlet: 'secondRouter',
        data: {
          title: 'Edit',
          breadcrumb: 'Edit',
        },
      },
      {
        path: 'login',
        loadChildren: () => import('../core/login/login.component').then(m => m.LoginComponent),
        data: {
          title: 'Login',
        }
      },
    ]
  },

  // {
  //   path: '', redirectTo: '/list', pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
