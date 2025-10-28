import { Component } from '@angular/core';
import { JosepeService } from '../josepe.service';

@Component({
  selector: 'app-hijo3',
  templateUrl: './hijo3.component.html',
  styleUrl: './hijo3.component.css'
})
export class Hijo3Component {
  names: string[] = [];
  constructor(private nameService: JosepeService) {}
  ngOnInit() {
    this.names = this.nameService.getNames();
  }
}
