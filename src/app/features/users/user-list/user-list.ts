import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { catchError, Observable, throwError } from 'rxjs';
import { UserService } from '../../../core/services/user';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { Button } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [TableModule, SelectModule, FormsModule, AsyncPipe, Button],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {
  users$: Observable<any[]> = new Observable<any[]>();
  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private router: Router
  ) {}
  goToRoute(route: string) {
    this.router.navigate([route]);
  }
  ngOnInit() {
    this.users$ = this.userService.getUsers().pipe(
      catchError((error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to fetch users',
        });
        return throwError(() => error);
      })
    );
  }
}
