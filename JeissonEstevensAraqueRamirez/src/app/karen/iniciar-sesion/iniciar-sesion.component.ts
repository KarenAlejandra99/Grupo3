import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiciogeneralService } from '../serviciogeneral.service';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  declare email: string;
  declare password: string;
  ingresar() {
    console.log(this.email);
    console.log(this.password);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
