import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Shift } from '../models/shift.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly API_URL = 'http://localhost:3000/users';
  private readonly SHIFT_API_URL = 'http://localhost:3000/shifts';

  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.API_URL, user);
  }

  getShifts(): Observable<Shift[]> {
    return this.http.get<Shift[]>(this.SHIFT_API_URL);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.API_URL);
  }
}
