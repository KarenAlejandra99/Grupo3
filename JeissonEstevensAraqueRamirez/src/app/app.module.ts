import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarPersonasComponent } from './karen/registrar-personas/registrar-personas.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginaPrincipalComponent } from './karen/pagina-principal/pagina-principal.component';
import { Pagina404Component } from './karen/pagina404/pagina404.component';
import { ServiciogeneralService } from './karen/serviciogeneral.service';
import { HttpClientModule } from '@angular/common/http';
import { BarrahorizaontalnavbarComponent } from './karen/barrahorizaontalnavbar/barrahorizaontalnavbar.component';
import { IniciarSesionComponent } from './karen/iniciar-sesion/iniciar-sesion.component';
import { JeissonAraqueComponent } from './jeisson-araque/jeisson-araque.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarPersonasComponent,
    PaginaPrincipalComponent,
    Pagina404Component,
    BarrahorizaontalnavbarComponent,
    IniciarSesionComponent,
    JeissonAraqueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ ServiciogeneralService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
