import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],  // Add FormsModule here
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showFilters: boolean = false; // Controls visibility of the filter list

  // Example list of filters with selected status
  filters: { name: string; selected: boolean }[] = [
    { name: 'Filter 1', selected: false },
    { name: 'Filter 2', selected: false },
    { name: 'Filter 3', selected: false },
    { name: 'Filter 4', selected: false },
  ];

  toggleFilters() {
    this.showFilters = !this.showFilters; // Toggle the filter list visibility
  }

  getSelectedFilters(): string[] {
    return this.filters.filter(filter => filter.selected).map(filter => filter.name);
  }

  logSelectedFilters() {
    const selectedFilters = this.getSelectedFilters();
    console.log('Selected Filters:', selectedFilters);
  }
}
