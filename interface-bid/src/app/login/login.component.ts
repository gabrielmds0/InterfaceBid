import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router, private storageService: StorageService) {}

  login() {
    const mockUsername = 'teste';
    const mockPassword = 'teste';

    if (!this.username || !this.password) {
      this.errorMessage = 'Username and password are required.';
    } else if (this.username === mockUsername && this.password === mockPassword) {
      this.errorMessage = '';
      console.log('Login successful!');

      this.storageService.setItem('isLoggedIn', 'true');
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid username or password.';
    }
  }
}
