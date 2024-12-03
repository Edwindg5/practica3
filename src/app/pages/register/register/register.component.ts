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
    console.log('Formulario enviado:', this.registerForm.value);
    if (this.registerForm.valid) {
      const user = this.registerForm.value;
      localStorage.setItem('user', JSON.stringify(user));
      console.log('Usuario guardado en localStorage');
  
      Swal.fire({
        title: '¡Registro Exitoso!',
        text: 'Ahora puedes iniciar sesión.',
        icon: 'success',
      });
      this.router.navigate(['/login']);
    } else {
      console.log('Formulario inválido:', this.registerForm.errors);
      Swal.fire({
        title: '¡Error!',
        text: 'Por favor, completa el formulario correctamente.',
        icon: 'error',
      });
    }
  }
  
}
