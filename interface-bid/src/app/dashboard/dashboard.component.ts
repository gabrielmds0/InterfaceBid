import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { BodyGridComponent } from '../body-grid/body-grid.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, BodyGridComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isDashboard = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Update `isDashboard` based on the current route
    this.router.events.subscribe(() => {
      this.isDashboard = this.router.url === '/dashboard';
    });
  }
}
