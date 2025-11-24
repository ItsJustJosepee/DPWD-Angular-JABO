import { Component } from '@angular/core';
import { Maestro } from '../maestro';

@Component({
  selector: 'app-directiva-ng-for',
  templateUrl: './directiva-ng-for.component.html',
  styleUrl: './directiva-ng-for.component.css'
})
export class DirectivaNgForComponent {
  ListaMaestros: Maestro[] = [
    { nombre: "Juan Zarate", edad: 30, materia: "Poo", activo: true, img_url: "https://picsum.photos/id/447/900" },
    { nombre: "Mauricio Lopez", edad: 29, materia: "Redes", activo: true, img_url: "https://picsum.photos/id/338/900" },
    { nombre: "Jorge Gonzáles", edad: 35, materia: "Angular", activo: false, img_url: "https://picsum.photos/id/190/900" },
    { nombre: "Susana Ambríz", edad: 42, materia: "Visual", activo: true, img_url: "https://picsum.photos/id/640/900" },
    { nombre: "Diego López", edad: 25, materia: "C#", activo: false, img_url: "https://picsum.photos/id/177/900" }
  ];
}
