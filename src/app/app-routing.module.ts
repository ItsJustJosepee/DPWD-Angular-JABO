import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Asegúrate de que todos estos componentes estén importados correctamente
import { PlantillaComponent } from './plantilla/plantilla.component';  // Verifica la ruta del componente
import { ValidacionesComponent } from './validaciones/validaciones.component'; // Verifica la ruta del componente
import { FormulariosReactivosComponent } from './formularios-reactivos/formularios-reactivos.component'; // Verifica la ruta del componente
import { PadreComponent } from './padre/padre.component'; // Verifica la ruta del componente
import { HijoComponent } from './hijo/hijo.component'; // Verifica la ruta del componente
import { Padre2Component } from './padre2/padre2.component'; // Verifica la ruta del componente
import { Hijo2Component } from './hijo2/hijo2.component'; // Verifica la ruta del componente

const routes: Routes = [
  { path: 'Formulario', component: PlantillaComponent },
  { path: 'validacion', component: ValidacionesComponent },
  { path: 'reactivos', component: FormulariosReactivosComponent },
  { path: 'padre', component: PadreComponent },
  { path: 'hijo', component: HijoComponent },
  { path: 'padre2', component: Padre2Component },
  { path: 'hijo2', component: Hijo2Component },
  { path: '', redirectTo: '/Formulario', pathMatch: 'full' }, // Redirige al componente 'Formulario' al inicio
  { path: '**', redirectTo: '/Formulario' } // Redirige a 'Formulario' si no existe la ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
