import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule], // Add FormsModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {} // Inject the Router


  login() {
    const mockUsername = 'teste';
    const mockPassword = 'teste';
  
    if (!this.username || !this.password) {
      this.errorMessage = 'Username and password are required.';
    } else if (this.username === mockUsername && this.password === mockPassword) {
      this.errorMessage = '';
      console.log('Login successful!');
  
      // Save authentication status in localStorage
      localStorage.setItem('isLoggedIn', 'true');
  
      // Redirect to dashboard
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid username or password.';
    }
  }
  
  
}
