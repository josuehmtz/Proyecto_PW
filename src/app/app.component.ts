import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from './persona.model';
import { ProyectoServices } from './proyecto.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  personas:Persona[]=[]
  constructor(private proyectoService:ProyectoServices, private router:Router){}

  ngOnInit(){
    this.personas=this.proyectoService.personas;
    //this.proyectoService.obtenerPersonas().subscribe((personas:Persona[]) => {
      //this.personas=personas;
      //this.proyectoService.setPersonas(personas);
    //})
  }

}
