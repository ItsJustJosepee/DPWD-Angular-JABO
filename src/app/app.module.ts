import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { ValidacionesComponent } from './validaciones/validaciones.component';
import { FormulariosReactivosComponent } from './formularios-reactivos/formularios-reactivos.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { Padre2Component } from './padre2/padre2.component';
import { Hijo2Component } from './hijo2/hijo2.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantillaComponent,
    ValidacionesComponent,
    FormulariosReactivosComponent,
    PadreComponent,
    HijoComponent,
    Padre2Component,
    Hijo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
