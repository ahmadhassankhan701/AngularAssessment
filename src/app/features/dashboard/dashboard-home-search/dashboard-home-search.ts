import { Component } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dashboard-home-search',
  imports: [IconFieldModule, InputIconModule, ButtonModule],
  templateUrl: './dashboard-home-search.html',
  styleUrl: './dashboard-home-search.scss',
})
export class DashboardHomeSearch {}
