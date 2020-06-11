import { Component, Input, OnInit } from '@angular/core';
import { ItemMenu } from './item-menu';
import { UtilService } from '../util/util.service';
import * as global from '../global';
import * as $ from 'jquery';

@Component({
  selector: 'app-barra-menu',
  templateUrl: './barra-menu.component.html',
  styleUrls: ['./barra-menu.component.css'],
  providers:[UtilService]
})
export class BarraMenuComponent implements OnInit {
  itensMenu: Array<ItemMenu> = [
    new ItemMenu(1,'Home','/'),
    new ItemMenu(2,'Produtos','/produto'),
    new ItemMenu(3,'Representantes','/representante'),
    new ItemMenu(4,'A Empresa','/empresa'),
    new ItemMenu(5,'Fale Conosco','/contato'),
    new ItemMenu(6,'Acesso','/login')
  ];

  @Input() logado: boolean;

  constructor(private util: UtilService) {
    $(".nav-item").each(function (posicao, item) {
      item.onclick = function () {
        var $listaMenu = $("#intensBarraMenu");
        $listaMenu.removeClass("show");
      };
    });
  }

  ngOnInit(): void {
    this.logado = this.util.getLogado();
    console.log(UtilService.usuarioLogado);
  }
}
