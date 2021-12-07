import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiciogeneralService } from '../serviciogeneral.service';


declare var operacion:any;
declare var cedula_vali:any;
declare var retorno1:any;
declare var validar_nombre:any;
declare var ventana_insertar_con_exito:any;




@Component({
  selector: 'app-registrar-personas',
  templateUrl: './registrar-personas.component.html',
  styleUrls: ['./registrar-personas.component.css']
})
export class RegistrarPersonasComponent implements OnInit {

//atributos

 retorno1="";
 retorno_nombre="";

 datosformulario =new FormGroup({
  sexo_usuario: new FormControl(''),
  cedula: new FormControl(''),
  nombre: new FormControl(''),
  username: new FormControl(''),
  email: new FormControl(''),
  contrasena: new FormControl(''),
 });


  recibir_datos(){

    let sexo_usuario=this.datosformulario.value.sexo_usuario;
    let cedula=this.datosformulario.value.cedula;
    let nombre=this.datosformulario.value.nombre;
    let username=this.datosformulario.value.username;
    let email=this.datosformulario.value.email;
    let contrasena=this.datosformulario.value.contrasena;
    
  this.APIService.InsertarDatos(this.datosformulario.value).subscribe(data => {ventana_insertar_con_exito();/*alert("Se agrego con exito");*/});           




  /*
  let cedula=this.datosformulario.value.cedula;
  let retorno_valido = cedula_vali(cedula);
  this.retorno1=retorno_valido;
  
   
  let nombre_retorno_valido=this.datosformulario.value.nombre;
  let nombre_retorno_valido1= validar_nombre(nombre_retorno_valido);
  this.retorno_nombre=nombre_retorno_valido1;*/
  }

  constructor(private APIService: ServiciogeneralService ) { }

  ngOnInit(): void {
  }

//metodos  estaticos o dinamicos


}
