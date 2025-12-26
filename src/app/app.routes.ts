import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './features/dashboard/dashboard-layout/dashboard-layout';

export const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard-home/dashboard-home').then((m) => m.DashboardHome),
      },
      {
        path: 'users',
        loadComponent: () => import('./features/users/user-list/user-list').then((m) => m.UserList),
      },
      {
        path: 'users/new',
        loadComponent: () => import('./features/users/user-form/user-form').then((m) => m.UserForm),
      },
    ],
  },
];
