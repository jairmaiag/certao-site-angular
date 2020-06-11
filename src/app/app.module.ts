import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraMenuComponent } from './barra-menu/barra-menu.component';
import { CarrocelComponent } from './carrocel/carrocel.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LoginComponent } from './login/login.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { ContatoComponent } from './contato/contato.component';
import { RepresentanteComponent } from './representante/representante.component';
import { ProdutoComponent } from './produto/produto.component';
import { LateralDireitoComponent } from './lateral-direito/lateral-direito.component';
import { UtilComponent } from './util/util.component';
import { UtilService } from './util/util.service';

@NgModule({
  declarations: [
    AppComponent,
    BarraMenuComponent,
    CarrocelComponent,
    RodapeComponent,
    LoginComponent,
    EmpresaComponent,
    ContatoComponent,
    RepresentanteComponent,
    ProdutoComponent,
    LateralDireitoComponent,
    UtilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
