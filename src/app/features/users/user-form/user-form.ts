import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../core/services/user';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    AutoCompleteModule,
    ButtonModule,
    CardModule,
  ],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
})
export class UserForm {
  userForm: FormGroup;

  roles = [
    { label: 'Admin', value: 'Admin' },
    { label: 'User', value: 'User' },
    { label: 'Manager', value: 'Manager' },
  ];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      // role: [null, Validators.required]
    });
  }

  submit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    this.userService.createUser(this.userForm.value).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'User created successfully',
        });

        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 800);
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to create user',
        });
      },
    });
  }
}
