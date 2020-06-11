import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrocelComponent } from './carrocel/carrocel.component';
import { ProdutoComponent } from './produto/produto.component';
import { RepresentanteComponent } from './representante/representante.component';
import { LoginComponent } from './login/login.component';

import { EmpresaComponent } from './empresa/empresa.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  {
    path: '',
    component: CarrocelComponent
  },
  {
    path: 'produto',
    component: ProdutoComponent
  },
  {
    path: 'representante',
    component: RepresentanteComponent
  },
  {
    path: 'empresa',
    component: EmpresaComponent
  },
  {
    path: 'contato',
    component:ContatoComponent
  },
  {
    path: 'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
