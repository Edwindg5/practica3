import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required, Validators.min(18)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      const user = this.registerForm.value;
      localStorage.setItem('user', JSON.stringify(user));

      Swal.fire({
        title: '¡Registro Exitoso!',
        text: 'Ahora puedes iniciar sesión.',
        icon: 'success',
        confirmButtonText: 'Ir al Login',
        background: '#ffde00',
        color: '#ff0000',
        customClass: {
          popup: 'rounded-lg shadow-lg',
          title: 'text-4xl font-bold text-center text-yellow-600',
          confirmButton: 'bg-yellow-500 text-white font-semibold rounded-md px-6 py-2 mt-4',
        },
      });
      this.router.navigate(['/login']);
    } else {
      Swal.fire({
        title: '¡Error!',
        text: 'Por favor, completa el formulario correctamente.',
        icon: 'error',
        confirmButtonText: 'Revisar',
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
