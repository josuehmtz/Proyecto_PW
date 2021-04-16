import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {
  imagen1:string = "assets/imagenes/html5.png";

  constructor() { }

  ngOnInit(): void {
  }

}
