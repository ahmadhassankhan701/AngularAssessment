import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardCards } from '../../features/dashboard/dashboard-cards/dashboard-cards';
import { DashboardCharts } from '../../features/dashboard/dashboard-charts/dashboard-charts';
import { DashboardHome } from '../../features/dashboard/dashboard-home/dashboard-home';

@Component({
  selector: 'app-dashboard-layout',
  imports: [RouterOutlet, DashboardCards, DashboardCharts, DashboardHome],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.scss',
})
export class DashboardLayout {}
