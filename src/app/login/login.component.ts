import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Usuario } from './usuario';
import { UtilService } from '../util/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
  usuario= new Usuario(0,null,null);
  @Input() logado: boolean;
  constructor(private servico: LoginService,private util: UtilService) { }

  ngOnInit(): void {
    this.logado=this.util.getLogado();
  }
  acessar(): void{
    var usuario = this.servico.acessar(this.usuario);
    ///this.util.setLogado();
    //this.logado=this.util.getLogado();
    //console.log(this.logado);
    console.log(usuario);
  }
  sair(): void{
    this.util.setLogado(!this.servico.sair(this.usuario));
    this.logado=this.util.getLogado();
    this.usuario=new Usuario(0,null,null);
  }
}
