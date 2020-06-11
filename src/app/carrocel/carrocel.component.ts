import { Component, OnInit } from '@angular/core';
import { Imagem } from './imagem';

@Component({
  selector: 'app-carrocel',
  templateUrl: './carrocel.component.html',
  styleUrls: ['./carrocel.component.css']
})
export class CarrocelComponent implements OnInit {
  qtdImagem: number =  4;
  imagens: Array<Imagem> = [];
  constructor() {
    for (let index = 0; index < this.qtdImagem; index++) {
      let id = index+1;
      let img = new Imagem(id,'assets/image/carrocel/img_'+(id<10?'0':'')+id+'.jpg');
      img.link='#';
      img.descricao='Slide '+id;
      this.imagens.push(img);
    }
  }
  ngOnInit(){}
}