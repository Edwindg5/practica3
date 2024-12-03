import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  login(email: string, password: string): boolean {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (storedUser.email === email && storedUser.password === password) {
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');  // También eliminar el usuario al cerrar sesión
  }
}