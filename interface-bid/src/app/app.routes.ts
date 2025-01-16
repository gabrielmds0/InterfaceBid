import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { MapaComponent } from './mapa/mapa.component';
import { ImoveisComponent } from './imoveis/imoveis.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Home page
  { path: 'login', component: LoginComponent }, // Login page
  { path: 'register', component: RegisterComponent }, // Register page
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard], // Protect dashboard
    children: [
      { path: 'profile', component: ProfileComponent }, // Default child route
      { path: 'veiculos', component: VeiculosComponent },
      { path: 'mapa', component: MapaComponent },
      { path: 'imoveis', component: ImoveisComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
  { path: '**', redirectTo: '' }, // Redirect unknown routes to home
];
