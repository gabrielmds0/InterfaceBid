// src/app/register/register.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';

  constructor(private router: Router, private storageService: StorageService) {}

  register() {
    if (!this.username || !this.password || !this.confirmPassword) {
      this.errorMessage = 'All fields are required.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    // Verificar se o usuário já está registrado
    const existingUser = this.storageService.getItem('users');
    const users = existingUser ? JSON.parse(existingUser) : [];

    // Verificar se o usuário já existe
    if (users.some((user: any) => user.username === this.username)) {
      this.errorMessage = 'Username is already taken.';
      return;
    }

    // Criar um novo usuário
    const newUser = { username: this.username, password: this.password };
    users.push(newUser);

    // Salvar o novo usuário no localStorage
    this.storageService.setItem('users', JSON.stringify(users));

    // Limpar os campos do formulário
    this.username = '';
    this.password = '';
    this.confirmPassword = '';
    this.errorMessage = '';

    console.log('Registration successful!');
    this.router.navigate(['/login']); // Redireciona para o login após o registro
  }
}