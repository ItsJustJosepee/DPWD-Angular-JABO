import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  NombreDelPadre: string = ""
  CambiarNombre(nombre:string){
    this.NombreDelPadre = nombre;
  }
}
