import { Component } from '@angular/core';

@Component({
  selector: 'app-validaciones',
  templateUrl: './validaciones.component.html',
  styleUrl: './validaciones.component.css'
})
export class ValidacionesComponent {
  usuario: any = {};
  mostrar: boolean = false
  submitForm2(formulario: any) {
    if (formulario.valid) {
      console.log('Formulario válido, datos del usuario:', this.usuario);
      this.mostrar = !this.mostrar
    } else {
      console.error('Formulario inválido. Por favor, complete todos los campos correctamente.');
    }
  }
}
