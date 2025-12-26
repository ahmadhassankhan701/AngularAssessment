import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';
import { TieredMenuModule } from 'primeng/tieredmenu';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MenubarModule,
    ButtonModule,
    AvatarModule,
    PanelMenuModule,
    TooltipModule,
    TieredMenuModule,
  ],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.scss',
})
export class DashboardLayoutComponent {
  items: MenuItem[] = [];
  isOrgExpanded: boolean = false;
  isDrawerExpanded: boolean = true;

  ngOnInit() {
    this.items = [
      {
        label: 'Organization',
        icon: 'pi pi-cog icon-outline',
        items: [
          {
            label: 'Users',
            icon: 'pi pi-users icon-outline',
          },
        ],
      },
    ];
  }
}
