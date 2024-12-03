import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login/login.component';
import { HomeComponent } from './pages/home/home/home.component';
import { RegisterComponent } from './pages/register/register/register.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  ];
  