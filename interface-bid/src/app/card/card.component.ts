import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true, // Mark it as a standalone component
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
}
