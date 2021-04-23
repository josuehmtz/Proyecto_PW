import { Component, OnInit} from '@angular/core';
import { Persona } from './persona.model';
import { ProyectoServices } from './proyecto.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  personas:Persona[]=[]
  constructor(private proyectoService:ProyectoServices, ){}

  ngOnInit():void{
    this.personas=this.proyectoService.personas;
  }
}
