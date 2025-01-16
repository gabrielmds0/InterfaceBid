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
    if (!this.username || !this.password) {
      this.errorMessage = 'Username and password are required.';
      return;
    }

    const storedUsers = this.storageService.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    // Verificar se as credenciais correspondem a algum usuário
    const user = users.find(
      (user: any) => user.username === this.username && user.password === this.password
    );

    if (user) {
      this.errorMessage = '';
      console.log('Login successful!');
      this.storageService.setItem('isLoggedIn', 'true');
      this.router.navigate(['/dashboard']); // Redireciona para o dashboard após o login
    } else {
      this.errorMessage = 'Invalid username or password.';
    }
  }
}