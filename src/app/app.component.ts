import { Component, OnInit } from '@angular/core';
import { UtilService } from './util/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private util: UtilService) { }
  ngOnInit(): void {
    this.util.setLogado(false);
  }
  usuarioLogado:boolean=false;
}