import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrl: './hijo2.component.css'
})
export class Hijo2Component {
  @Output() mensajeEnviado = new EventEmitter<string>();
  enviarMensaje(mensaje:string) {
    this.mensajeEnviado.emit(mensaje);
  }
}
