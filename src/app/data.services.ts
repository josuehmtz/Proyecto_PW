import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Persona } from "./persona.model";

@Injectable()
export class DataServices implements OnInit{
  constructor(private httpClient : HttpClient){}

  guardarPersonas(personas:Persona[]){
    this.httpClient.put("https://proyectopw-4fc02-default-rtdb.firebaseio.com/personas.json", personas).subscribe
    (response => console.log("Resultado de guardar personas: "+ response),
    error => console.log("Error al guardar personas" + error));
  }

  ngOnInit(){}
}
