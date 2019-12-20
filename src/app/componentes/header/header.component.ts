import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() mensajeDelHijo=new EventEmitter();

  cargarPedidos(){
    this.mensajeDelHijo.emit("pedidos");
  }
  cargarRepartidores(){
    this.mensajeDelHijo.emit("repartidores");
  }

  constructor() { }

  ngOnInit() {
  }

}
