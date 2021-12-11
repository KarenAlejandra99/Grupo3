import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './karen/pagina-principal/pagina-principal.component';
import { RegistrarPersonasComponent } from './karen/registrar-personas/registrar-personas.component';
import {Pagina404Component} from './karen/pagina404/pagina404.component';
import{IniciarSesionComponent} from './karen/iniciar-sesion/iniciar-sesion.component';
import { JeissonAraqueComponent } from './jeisson-araque/jeisson-araque.component';
import { AgregarProductComponent } from './agregar-product/agregar-product.component';


const routes: Routes = [
  {path: '', component:PaginaPrincipalComponent},
  {path: 'pagina_principal', component:PaginaPrincipalComponent},
  {path: 'formu_registrar', component:RegistrarPersonasComponent},
  {path: 'iniciar_sesion',component:IniciarSesionComponent},
  {path: 'jeisson_araque',component:JeissonAraqueComponent},
  {path: 'agregar_producto',component:AgregarProductComponent},
  {path: '**', component: Pagina404Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 