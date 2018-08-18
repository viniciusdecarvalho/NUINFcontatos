import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';

import { PessoasService } from '../pessoas.service';
import { Pessoa, Telefone } from '../pessoa';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {

  id: number;
  pessoa: Pessoa = new Pessoa();
  novoTelefone: Telefone = new Telefone();


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pessoasService: PessoasService
  ) {
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.pessoasService.getPessoa(this.id)
        .then(pessoa => this.pessoa = pessoa);
    }
  }

  adicionarTelefone() {
    this.pessoa.adicionarTelefone(this.novoTelefone);
    this.novoTelefone = new Telefone();
  }

  removerTelefone(telefone: Telefone) {
    this.pessoa.removerTelefone(telefone);
  }

  salvarPessoa() {
    this.pessoasService.salvar(this.pessoa)
      .then(() => {
        alert("Dados salvos com sucesso.");
        this.router.navigate(['pessoas']);
      })
      .catch();
  }
}
