import { Component, ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona.model';
import { ProyectoServices } from '../proyecto.services';

@Injectable()
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @ViewChild("nombreInput")
  nombreInput!: ElementRef;
  @ViewChild("apellidoInput")
  apellidoInput!: ElementRef;
  constructor(private router:Router, private proyectoService:ProyectoServices) { }

  ngOnInit(): void {
  }

  onGuardarPersona(){
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    this.proyectoService.agregarPersona(persona1);
    this.router.navigate(["admin"])
  }

  irPago(){
    this.router.navigate(["pago"])
  }

}
