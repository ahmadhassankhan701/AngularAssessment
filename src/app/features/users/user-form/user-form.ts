import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { UserService } from '../../../core/services/user';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { OnInit } from '@angular/core';
import { SelectModule } from 'primeng/select';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

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
    SelectModule,
    ToggleSwitchModule,
    IconFieldModule,
    InputIconModule,
    FormsModule,
  ],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
})
export class UserForm implements OnInit {
  userForm!: FormGroup;
  roles: any[] = [];
  departments: any[] = [];
  rfidEnabled: boolean = false;
  // Default placeholder image path
  imagePreview: string = '/profile.png';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private messageService: MessageService
  ) {}
  ngOnInit() {
    this.roles = [
      { name: 'Super Admin', code: 'admin' },
      { name: 'User', code: 'user' },
    ];
    this.departments = [
      { name: 'Fire Fighter', code: 'fire' },
      { name: 'Medical', code: 'med' },
      { name: 'Operations', code: 'ops' },
      { name: 'Security', code: 'sec' },
    ];
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      rfidEnabled: [false],
      rfidValue: [''],
      profileImage: [null],
      role: [null, Validators.required],
      department: [null, Validators.required],
    });
  }
  back() {
    this.router.navigate(['dashboard']);
  }
  submit() {
    if (this.userForm.invalid) {
      console.log('coming here');
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
        this.userForm.reset();
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
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // 1. Update the preview for the user
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);

      // 2. Optional: Patch the file into your Reactive Form
      this.userForm.patchValue({
        profileImage: file,
      });
    }
  }
}
