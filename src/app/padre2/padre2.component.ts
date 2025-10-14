import { Component } from '@angular/core';

@Component({
  selector: 'app-padre2',
  templateUrl: './padre2.component.html',
  styleUrl: './padre2.component.css'
})
export class Padre2Component {
  mensajeRecibido: string = '';

  recibirMensaje(mensaje: string) {
    this.mensajeRecibido = mensaje;
  }
}
