import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppInMemoryModule } from './app-in-memory.module';

import { ListagemPessoasComponent } from './pessoas/listagem-pessoas/listagem-pessoas.component';
import { EditarPessoaComponent } from './pessoas/editar-pessoa/editar-pessoa.component';
import { AngularMaterialModule } from './/angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    ListagemPessoasComponent,
    EditarPessoaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    AppInMemoryModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
