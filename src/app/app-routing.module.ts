import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlantillaComponent } from './plantilla/plantilla.component'; 
import { ValidacionesComponent } from './validaciones/validaciones.component';
import { FormulariosReactivosComponent } from './formularios-reactivos/formularios-reactivos.component';
import { PadreComponent } from './padre/padre.component';
import { Padre2Component } from './padre2/padre2.component';
import { Padre3Component } from './padre3/padre3.component';
import { InicioComponent } from './inicio/inicio.component';

import { EnlaceClaseComponent } from './enlace-clase/enlace-clase.component';
import { EnlacePropiedadesComponent } from './enlace-propiedades/enlace-propiedades.component';
import { VariablesPlantillaComponent } from './variables-plantilla/variables-plantilla.component';
import { DirectivaNgIfComponent } from './directiva-ng-if/directiva-ng-if.component';
import { DirectivaNgForComponent } from './directiva-ng-for/directiva-ng-for.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'formulario', component: PlantillaComponent },
  { path: 'validacion', component: ValidacionesComponent },
  { path: 'reactivos', component: FormulariosReactivosComponent },
  { path: 'padre', component: PadreComponent },
  { path: 'padre2', component: Padre2Component },
  { path: 'padre3', component: Padre3Component },

  // 🔥 Nuevos componentes agregados
  { path: 'enlace-clase', component: EnlaceClaseComponent },
  { path: 'enlace-propiedades', component: EnlacePropiedadesComponent },
  { path: 'variables-plantilla', component: VariablesPlantillaComponent },
  { path: 'ng-if', component: DirectivaNgIfComponent },
  { path: 'ng-for', component: DirectivaNgForComponent },

  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
