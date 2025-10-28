import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JosepeService {
  private names: string[] = []
  getNames() {
    return this.names;
  }
  addName(name: string) {
    this.names.push(name);
  }
  constructor() { }
}
