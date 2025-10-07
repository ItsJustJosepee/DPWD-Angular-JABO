import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios-reactivos',
  templateUrl: './formularios-reactivos.component.html',
  styleUrl: './formularios-reactivos.component.css'
})
export class FormulariosReactivosComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      fecha: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]]
    });
  }
  onSubmit() {
    if (this.registroForm && this.registroForm.valid) {
      console.log('Formulario válido. Datos;');
      console.log('Nombre:', this.registroForm.value.nombre);
      console.log('Correo Electrónico:', this.registroForm.value.email);
      console.log('Contraseña:', this.registroForm.value.password);
      this.MostrarDatos = true;
    } else {
      console.log('Formulario inválido. Por favor, complete todos los campos correctamente.');
    }
  }
}
