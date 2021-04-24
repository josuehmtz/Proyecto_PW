import { Injectable } from '@angular/core';
import { DataServices } from './data.services';
import { Persona } from './persona.model';

@Injectable()
export class ProyectoServices {
  constructor(private dataServices: DataServices) {}
  personas: Persona[] = [];

  setPersonas(personas: Persona[]) {
    this.personas = personas;
  }

  obtenerPersonas() {
    return this.dataServices.cargarPersonas();
  }

  agregarPersona(persona: Persona) {
    if (this.personas == null) {
      this.personas = [];
    }
    this.personas.push(persona);
    this.dataServices.guardarPersonas(this.personas);
  }

  modificarPersona(index: number, persona: Persona) {
    let persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
    this.dataServices.modificarPersona(index, persona);
  }

  eliminarPersonas(index: number) {
    this.personas.splice(index, 1);
    this.dataServices.eliminarPersona(index);
    //se vuelve a guardar el arreglo
    this.modificarPersonas();
  }

  modificarPersonas() {
    if (this.personas != null) {
      this.dataServices.guardarPersonas(this.personas);
    }
  }
}
