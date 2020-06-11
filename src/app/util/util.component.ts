import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-util',
  templateUrl: './util.component.html',
  styleUrls: ['./util.component.css']
})
export class UtilComponent implements OnInit {
  logado=false;
  constructor() { }
  ngOnInit(): void {
  }
  setLogado(logado){
    this.logado=logado;
  }
  getLogado(){
    return this.logado;
  }
}
