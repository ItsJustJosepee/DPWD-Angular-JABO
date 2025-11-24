import { Component } from '@angular/core';

@Component({
  selector: 'app-variables-plantilla',
  templateUrl: './variables-plantilla.component.html',
  styleUrl: './variables-plantilla.component.css'
})
export class VariablesPlantillaComponent {
  datos: string = "";

  MostrarDatos(nombre: string, apellido: string, correo: string, telefono: string) {
    this.datos = "Nombre: " + nombre +
                 "\nApellido: " + apellido +
                 "\nCorreo: " + correo +
                 "\nTeléfono: " + telefono;
  }
}
