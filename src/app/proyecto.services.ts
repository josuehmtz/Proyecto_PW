import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { Persona } from "./persona.model";

@Injectable()
export class ProyectoServices{

  constructor(private dataServices : DataServices){}
  personas : Persona[] = [];

  agregarPersona(persona:Persona){
    this.personas.push(persona);
    this.dataServices.guardarPersonas(this.personas)
  }

}
