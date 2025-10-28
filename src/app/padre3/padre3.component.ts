import { Component } from '@angular/core';
import { JosepeService } from '../josepe.service';

@Component({
  selector: 'app-padre3',
  templateUrl: './padre3.component.html',
  styleUrl: './padre3.component.css'
})
export class Padre3Component {
  constructor(private nameService: JosepeService) { }
  addName(name: string) {
    this.nameService.addName(name);
  }
}
