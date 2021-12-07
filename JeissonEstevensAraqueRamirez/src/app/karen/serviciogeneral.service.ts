import { Injectable } from '@angular/core';
import { Modulo } from './modulo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciogeneralService {

  URL_viaje='http://localhost/ciclog29unab/API/crud/';

  constructor(private http:HttpClient) { }

  InsertarDatos(usuario:Modulo){
  //comunicar con la base
  //alert("Llego al servicio" + JSON.stringify(usuario));

  return this.http.post<Modulo>('${this.URL_viaje}Insertardatos.php',usuario);


  }
 Eliminar_persona(cedula:Modulo){
    //comunicar con la base
    //alert("Llego al servicio" + JSON.stringify(usuario));
  
    return this.http.get('${this.URL_viaje}Eliminardatos.php?cedula=${cedula}');
  
  
    }

}
