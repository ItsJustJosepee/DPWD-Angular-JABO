import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlantillaComponent } from './plantilla/plantilla.component'; 
import { ValidacionesComponent } from './validaciones/validaciones.component';
import { FormulariosReactivosComponent } from './formularios-reactivos/formularios-reactivos.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { Padre2Component } from './padre2/padre2.component';
import { Hijo2Component } from './hijo2/hijo2.component';
import { InicioComponent } from './inicio/inicio.component';

// CAMBIOS HECHOS!
const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'formulario', component: PlantillaComponent },
  { path: 'validacion', component: ValidacionesComponent },
  { path: 'reactivos', component: FormulariosReactivosComponent },
  { path: 'padre', component: PadreComponent },
  { path: 'hijo', component: HijoComponent },
  { path: 'padre2', component: Padre2Component },
  { path: 'hijo2', component: Hijo2Component },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
