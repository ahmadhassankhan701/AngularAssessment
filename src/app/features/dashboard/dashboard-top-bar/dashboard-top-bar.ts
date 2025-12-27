import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-dashboard-top-bar',
  imports: [AvatarGroupModule, AvatarModule, ButtonModule, DrawerModule],
  templateUrl: './dashboard-top-bar.html',
  styleUrl: './dashboard-top-bar.scss',
})
export class DashboardTopBar {
  drawerVisible: boolean = false;
  constructor(private router: Router) {}

  addNewUser() {
    this.router.navigate(['/users/new']);
  }
}
