import { Component } from '@angular/core';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent {
  usuario = {
    nombre: '',
    email: '',
    password: ''
  };

  mostrar: boolean = false;

  submitForm(form: any) {
    console.log("Formulario válido, datos del usuario:", this.usuario);
    this.mostrar = !this.mostrar;
  }
}
