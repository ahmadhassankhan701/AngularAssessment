import { Component } from '@angular/core';
import { KnobModule } from 'primeng/knob';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-charts',
  standalone: true,
  imports: [KnobModule, FormsModule],
  templateUrl: './dashboard-charts.html',
  styleUrl: './dashboard-charts.scss',
})
export class DashboardCharts {
  progressCards = [
    { label: 'Active Trips', value: 99, current: 300, total: 302 },
    { label: 'Active Vehicles', value: 75, current: 375, total: 500 },
    { label: 'Under Maintenance', value: 80, current: 16, total: 20 },
  ];

  simpleStats = [
    { label: 'In-Active Trips', count: 2 },
    { label: 'Stopped Vehicles', count: 100 },
    { label: 'Queue Maintenance', count: 4 },
    { label: 'Total Departments', count: 7 },
    { label: 'Total Fleets', count: 60 },
    { label: 'Total Drivers', count: 300 },
  ];
}
