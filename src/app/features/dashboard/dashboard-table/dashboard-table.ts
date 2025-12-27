import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../core/services/user';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard-table',
  standalone: true,
  imports: [TableModule, SelectModule, FormsModule, AsyncPipe],
  templateUrl: './dashboard-table.html',
  styleUrls: ['./dashboard-table.scss'],
})
export class DashboardTable implements OnInit {
  statusOptions: any[] = [];
  vehicles$: Observable<any[]> = new Observable<any[]>();
  constructor(private userService: UserService, private messageService: MessageService) {}
  ngOnInit() {
    this.vehicles$ = this.userService.getShifts();
    this.statusOptions = [
      { name: 'Active', code: 'Active' },
      { name: 'In-Active', code: 'In-Active' },
    ];
  }
}
