import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { BodyGridComponent } from '../body-grid/body-grid.component';
import { VeiculosComponent } from '../veiculos/veiculos.component';
import { CommonModule } from '@angular/common';
import { MapaComponent } from '../mapa/mapa.component';
import { ImoveisComponent } from '../imoveis/imoveis.component';
import { ProfileComponent } from '../profile/profile.component';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
      RouterModule, // Import RouterModule
      RouterOutlet, // Import RouterOutlet
      NavbarComponent,
      BodyGridComponent,
      VeiculosComponent,
      CommonModule,
      MapaComponent,
      ImoveisComponent,
      ProfileComponent
    ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
