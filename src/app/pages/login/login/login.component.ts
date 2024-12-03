import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  onLogin() {
    const { email, password } = this.loginForm.value;
    if (this.authService.login(email, password)) {
      Swal.fire({
        title: '¡Bienvenido!',
        text: 'Inicio de sesión exitoso',
        icon: 'success',
        confirmButtonText: 'Continuar',
        background: '#ffde00',
        color: '#ff0000',
        customClass: {
          popup: 'rounded-lg shadow-lg',
          title: 'text-4xl font-bold text-center text-yellow-600',
          confirmButton: 'bg-yellow-500 text-white font-semibold rounded-md px-6 py-2 mt-4',
        },
      });
  
      // Usar setTimeout para retrasar la redirección
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 1500); // Redirige después de 1.5 segundos
    } else {
      Swal.fire({
        title: '¡Oops!',
        text: 'Credenciales inválidas',
        icon: 'error',
        confirmButtonText: 'Reintentar',
        background: '#ffde00',
        color: '#ff0000',
        customClass: {
          popup: 'rounded-lg shadow-lg',
          title: 'text-3xl font-bold text-center text-yellow-600',
          confirmButton: 'bg-red-600 text-white font-semibold rounded-md px-6 py-2 mt-4',
        },
      });
    }
  }
  
}
