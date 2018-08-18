import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { ListagemPessoasComponent } from './pessoas/listagem-pessoas/listagem-pessoas.component';
import { EditarPessoaComponent } from './pessoas/editar-pessoa/editar-pessoa.component';

const routes: Routes = [
  { path: '', redirectTo: '/pessoas', pathMatch: 'full' },
  { path: 'pessoas', component: ListagemPessoasComponent },
  { path: 'pessoas/editar/:id', component: EditarPessoaComponent }
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
