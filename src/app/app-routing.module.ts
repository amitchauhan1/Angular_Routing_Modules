import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { IsCheckGuard } from './guard/is-check.guard';
import { PreloadService } from './core/service/preload/preload.service';
import { PageNotFoundComponent } from './shared/404/page-not-found/page-not-found.component';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule),
    data: {
      title: 'Login',
    }
  },
  {
    path: 'trainee',
    loadChildren: () => import('./trainee/trainee.module').then(m => m.TraineeModule),
    canActivateChild: [IsCheckGuard],
    data: {
      title: 'Trainee',
      breadcrumb: 'Trainee',
    }
    // component: TraineeComponent,
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivateChild: [IsCheckGuard],
    data: {
      name: 'dept',
      preload: true,
      breadcrumb: 'Dashboard',
      title: 'Dashboard',
    },
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
    data: {
      name: 'emp',
      title: 'Employee',
      breadcrumb: 'Employee',
    },
    // canLoad: [IsCheckGuard],
    canActivateChild: [IsCheckGuard],
  },
  {
    path: 'deparment',
    loadChildren: () => import('./deparment/deparment.module').then(m => m.DeparmentModule),
    data: {
      name: 'dept', title: 'Deparment',
      breadcrumb: 'Deparment'
    },
    canActivateChild: [IsCheckGuard],
  },

  // Using Rxjs All functionllity
  {
    path: 'rxjs',
    loadChildren: () => import('./rxjs1/rxjs1.module').then(m => m.Rxjs1Module),
    canActivateChild: [IsCheckGuard],
    data: { breadcrumb: 'rxjs', },
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadService })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
