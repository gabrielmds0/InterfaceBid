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
  { path: '', component: HomeComponent }, // Landing Page
  { path: 'login', component: LoginComponent }, // Login Page
  { path: 'register', component: RegisterComponent }, // Register Page
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard], // Protect with AuthGuard
    children: [
      { path: 'veiculos', component: VeiculosComponent },
      { path: 'mapa', component: MapaComponent },
      { path: 'imoveis', component: ImoveisComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
  { path: '**', redirectTo: '' }, // Redirect unknown routes to landing page
];
