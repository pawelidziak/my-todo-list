/**
 * Created by pawel.idziak on 25.06.2017.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {InfoComponent} from './info/info.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
