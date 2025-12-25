import { Routes } from '@angular/router';
import { UserForm } from './features/users/user-form/user-form';
import { DashboardLayoutComponent } from './features/dashboard/dashboard-layout/dashboard-layout';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/dashboard/dashboard-home/dashboard-home').then((m) => m.DashboardHome),
      },
    ],
  },
  {
    path: 'users/new',
    component: UserForm,
  },
  {
    path: '',
    redirectTo: 'users/new',
    pathMatch: 'full',
  },
];
