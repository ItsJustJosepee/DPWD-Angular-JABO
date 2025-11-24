import { Component } from '@angular/core';

@Component({
  selector: 'app-enlace-clase',
  templateUrl: './enlace-clase.component.html',
  styleUrl: './enlace-clase.component.css'
})
export class EnlaceClaseComponent {
  clase_actual: string = "Ninguna";
  deshabilitado: boolean = false;
  grande: boolean = false;
  cursiva: boolean = false;
  subrayado: boolean = false;
}
