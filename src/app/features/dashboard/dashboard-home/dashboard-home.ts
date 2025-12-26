import { Component } from '@angular/core';
import { DashboardCharts } from '../dashboard-charts/dashboard-charts';
import { DashboardHomeSearch } from '../dashboard-home-search/dashboard-home-search';
import { DashboardTable } from '../dashboard-table/dashboard-table';

@Component({
  selector: 'app-dashboard-home',
  imports: [DashboardCharts, DashboardHomeSearch, DashboardTable],
  templateUrl: './dashboard-home.html',
  styleUrl: './dashboard-home.scss',
})
export class DashboardHome {}
