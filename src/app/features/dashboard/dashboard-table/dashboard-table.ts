import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-table',
  standalone: true,
  imports: [TableModule, SelectModule, FormsModule],
  templateUrl: './dashboard-table.html',
  styleUrls: ['./dashboard-table.scss'],
})
export class DashboardTable {
  statusOptions: any[] = [];
  vehicles = [
    {
      name: 'Bus-9265',
      plate: '04321',
      odometer: '55,956',
      gpsDate: '3-Nov-2024',
      gpsTime: '13:05:50',
      deviceId: 'C 0 3 - 9 6 3 2 1',
      sim: '1.5GB',
      fleet: 'Q22',
      status: 'Active',
    },
    {
      name: 'Bus-9265',
      plate: '04321',
      odometer: '55,956',
      gpsDate: '3-Nov-2024',
      gpsTime: '13:05:50',
      deviceId: 'C 0 3 - 9 6 3 2 1',
      sim: '1.5GB',
      fleet: 'Q22',
      status: 'Active',
    },
    {
      name: 'Bus-9265',
      plate: '04321',
      odometer: '55,956',
      gpsDate: '3-Nov-2024',
      gpsTime: '13:05:50',
      deviceId: 'C 0 3 - 9 6 3 2 1',
      sim: '1.5GB',
      fleet: 'Q22',
      status: 'In-Active',
    },
    // Repeat for other rows...
  ];

  ngOnInit() {
    this.statusOptions = [
      { name: 'Active', code: 'Active' },
      { name: 'In-Active', code: 'In-Active' },
    ];
  }
}
