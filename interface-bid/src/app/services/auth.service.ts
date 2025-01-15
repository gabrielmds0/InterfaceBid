import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false; // Keeps track of authentication state
  private currentUser: string | null = null; // Mock user data (replace with real logic)

  constructor(private router: Router) {}

  // Login method
  login(username: string, password: string): boolean {
    // Replace with real authentication logic
    if (username === 'admin' && password === 'password') {
      this.isAuthenticated = true;
      this.currentUser = username;
      return true;
    }
    return false;
  }

  // Register method (replace with actual logic)
  register(username: string, password: string): boolean {
    // Mock registration logic
    console.log('User registered:', username);
    return true;
  }

  // Logout method
  logout(): void {
    this.isAuthenticated = false;
    this.currentUser = null;
    this.router.navigate(['/login']);
  }

  // Check if user is authenticated
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  // Get current user (mock)
  getUser(): string | null {
    return this.currentUser;
  }
}
