import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { ValidacionesComponent } from './validaciones/validaciones.component';
import { FormulariosReactivosComponent } from './formularios-reactivos/formularios-reactivos.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { Padre2Component } from './padre2/padre2.component';
import { Hijo2Component } from './hijo2/hijo2.component';
import { InicioComponent } from './inicio/inicio.component';
import { Padre3Component } from './padre3/padre3.component';
import { Hijo3Component } from './hijo3/hijo3.component';
import { EnlaceClaseComponent } from './enlace-clase/enlace-clase.component';
import { EnlacePropiedadesComponent } from './enlace-propiedades/enlace-propiedades.component';
import { VariablesPlantillaComponent } from './variables-plantilla/variables-plantilla.component';
import { DirectivaNgIfComponent } from './directiva-ng-if/directiva-ng-if.component';
import { DirectivaNgForComponent } from './directiva-ng-for/directiva-ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantillaComponent,
    ValidacionesComponent,
    FormulariosReactivosComponent,
    PadreComponent,
    HijoComponent,
    Padre2Component,
    Hijo2Component,
    InicioComponent,
    Padre3Component,
    Hijo3Component,
    EnlaceClaseComponent,
    EnlacePropiedadesComponent,
    VariablesPlantillaComponent,
    DirectivaNgIfComponent,
    DirectivaNgForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
