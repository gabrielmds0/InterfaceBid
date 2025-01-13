import { Routes } from '@angular/router';
import { VeiculosComponent } from './veiculos/veiculos.component';  // Ensure the component is imported
import { BodyGridComponent } from './body-grid/body-grid.component';
import { MapaComponent } from './mapa/mapa.component';


export const routes: Routes = [
  { path: '', component: BodyGridComponent },  // Default route shows BodyGrid
  { path: 'veiculos', component: VeiculosComponent },  // Add the route for 'veiculos'
  { path: 'mapa', component: MapaComponent }  // Add the route for 'veiculos'
];
