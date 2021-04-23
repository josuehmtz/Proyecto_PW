import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Persona } from "./persona.model";

@Injectable()
export class DataServices implements OnInit{
  constructor(private httpClient : HttpClient){}

  cargarPersonas(){
    return this.httpClient.get("https://proyectopw-4fc02-default-rtdb.firebaseio.com/personas.json");
  }

  guardarPersonas(personas:Persona[]){
    this.httpClient.put("https://proyectopw-4fc02-default-rtdb.firebaseio.com/personas.json", personas).subscribe
    (response => console.log("Resultado de guardar usuario: "+ response),
    error => console.log("Error al guardar usuario" + error));
  }

  eliminarPersona(index:number){
    let url:string;
    url = "https://proyectopw-4fc02-default-rtdb.firebaseio.com/personas " + index + ".json";
    this.httpClient.delete(url).subscribe(response => console.log("resultado de eliminar usuario: "+ response),
    error => console.log("Error al eliminar usuario" + error)
    );
  }

  modificarPersona(index:number, persona:Persona){
    let url:string;
    url = "https://proyectopw-4fc02-default-rtdb.firebaseio.com/personas " + index + ".json";
    this.httpClient.put(url,persona).subscribe(response => console.log("resultado de modificar usuario: "+response),
    error => console.log("Error al modificar usuario" + error)
    );
  }



  ngOnInit(){}
}
