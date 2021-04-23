import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona.model';
import { ProyectoServices } from '../proyecto.services';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  nombreInput:string ="";
  apellidoInput:string="";

 // @ViewChild("nombreInput") nombreInput:ElementRef;
  constructor(private router:Router, private proyectoService:ProyectoServices) { }

  ngOnInit(): void {
  }



  onGuardarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.proyectoService.agregarPersona(persona1);
    this.router.navigate(["admin"])
  }
  irPago(){
    this.router.navigate(["pago"])
  }

}
