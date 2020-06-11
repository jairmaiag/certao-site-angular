import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { UtilService } from '../util/util.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //usuarioLogado = new EventEmitter<Usuario>();
  static usuarioLogado = null;

  constructor(private util: UtilService) { }
  acessar(usuario: Usuario): Usuario {
    var retorno = null;
    if(usuario !== undefined && (usuario.login && usuario.senha)){
      usuario.senha=null;
      retorno = usuario;
      UtilService.usuarioLogado=retorno;
    }
    //this.usuarioLogado.emit(retorno);
    return retorno;
  }
  sair(usuario: Usuario): Usuario {
    var retorno = null;
    if(usuario !== undefined && (usuario.login && usuario.senha)){
      usuario.senha=null;
      retorno = usuario;
    }
    return retorno;
  }
}