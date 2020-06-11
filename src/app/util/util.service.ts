import { Injectable, EventEmitter, OnInit } from '@angular/core';
import {Usuario} from '../login/usuario';
@Injectable({
  providedIn: 'root'
})

export class UtilService implements OnInit{
  static usuarioLogado = null;
  //usuarioLogado = new EventEmitter<Usuario>();
  logado: boolean;
  constructor() { 
  }

  ngOnInit(): void {
  }

  setLogado(logadoB:boolean):void{
    this.logado=logadoB;
  }

  getLogado():boolean{
    return this.logado;
  }
}
