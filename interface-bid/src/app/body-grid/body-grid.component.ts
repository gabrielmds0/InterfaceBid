import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { CardComponent } from '../card/card.component'; // Import CardComponent
import { DOCUMENT } from '@angular/common'; // Import DOCUMENT token for safer DOM access

@Component({
  selector: 'app-body-grid',
  standalone: true,
  imports: [CommonModule, CardComponent], // Include CommonModule
  templateUrl: './body-grid.component.html',
  styleUrls: ['./body-grid.component.css'],
})
export class BodyGridComponent {
  auctions = [
    { title: 'Car 1', description: 'Description for Car 1', imageUrl: 'https://via.placeholder.com/150' },
    { title: 'House 1', description: 'Description for House 1', imageUrl: 'https://via.placeholder.com/150' },
    { title: 'Car 2', description: 'Description for Car 2', imageUrl: 'https://via.placeholder.com/150' },
    { title: 'House 2', description: 'Description for House 2', imageUrl: 'https://via.placeholder.com/150' },
  ];

  displayedAuctions: any[] = [];

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.populateGrid();
  }

  populateGrid() {
    const screenHeight = this.document.defaultView?.innerHeight || 0; // Fallback if window is not defined
    const cardHeight = screenHeight / 4; // Match `grid-auto-rows: calc(100vh / 4)`
    const totalRows = Math.ceil(screenHeight / cardHeight); // Rows needed
    const cols = 3; // Update based on `grid-cols-*`
    const totalCards = totalRows * cols;

    // Fill displayedAuctions with real and dummy cards
    this.displayedAuctions = [...this.auctions];
    while (this.displayedAuctions.length < totalCards) {
      this.displayedAuctions.push({
        title: 'Placeholder',
        description: 'This is a placeholder card',
        imageUrl: 'https://via.placeholder.com/150', // Placeholder image
      });
    }
  }
}
