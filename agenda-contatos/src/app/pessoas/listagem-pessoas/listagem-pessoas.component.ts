import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pessoa } from '../pessoa';
import { PessoasService } from '../pessoas.service';

@Component({
  selector: 'app-listagem-pessoas',
  templateUrl: './listagem-pessoas.component.html',
  styleUrls: ['./listagem-pessoas.component.css']
})
export class ListagemPessoasComponent implements OnInit {

  pessoas: Pessoa[] = [];
  params: Pessoa = new Pessoa();

  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf', 'idade', 'quant_telefones', 'acao'];

  constructor(
    private router: Router,
    private pessoasService: PessoasService
  ) { }

  ngOnInit() {
    this.listarPessoas();
  }

  private listarPessoas() {
    this.pessoasService.getPessoas().then(pessoas => this.pessoas = pessoas);
  }

  pesquisar(): void {
    this.pessoas = [];
    this.pessoasService.pesquisar(this.params)
      .then(pessoas => this.pessoas = pessoas);
  }

  cadastrarPessoa() {
    this.router.navigate(['pessoas/editar/', 0]);
  }

  editarPessoa(pessoa: Pessoa) {
    this.router.navigate(['pessoas/editar/', pessoa.id]);
  }

  deletarPessoa(pessoa: Pessoa) {
    if (confirm('Tem certeza que deseja deletar esta pessoa?')) {
      this.pessoasService.deletarPessoa(pessoa)
        .catch(() => alert('Falha na operação!!!'))
        .then(() => this.listarPessoas());
    }
  }

}
