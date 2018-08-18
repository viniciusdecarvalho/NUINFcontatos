import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Pessoa } from './pessoa';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor(
    private http: Http
  ) { }

  private pessoasApi = 'https://localhost:5001/api/pessoas';

  getPessoas(): Promise<Pessoa[]> {
    return this.http.get(this.pessoasApi)
      .toPromise()
      .then(pessoas => pessoas.json().map(p => new Pessoa(p)));
  }

  getPessoa(id: number): Promise<Pessoa> {
    return this.http.get(`${this.pessoasApi}/?id=${id}`)
      .toPromise()
      .then(p => new Pessoa(p.json()[0]));
  }

  pesquisar(params: Pessoa): Promise<Pessoa[]> {

    if (!params.nome && !params.cpf) return this.getPessoas();

    return this.getPessoas()
      .then(pessoas => pessoas.filter(pessoa =>
        (params.nome && pessoa.nome.toLowerCase().includes(params.nome.toLowerCase()))
        ||
        (params.cpf && pessoa.cpf.toLowerCase().includes(params.cpf.toLowerCase()))
      ));
  }

  salvar(pessoa: Pessoa): Promise<any> {

    const url = `${this.pessoasApi}/${pessoa.id}`;
    const method = pessoa.id == 0 ? 'post' : 'put';

    return this.http.request(url, { method: method, params: pessoa } ).toPromise();

  }

  deletarPessoa(pessoa: Pessoa): Promise<any> {
    const url = `${this.pessoasApi}/${pessoa.id}`;
    return this.http.delete(url).toPromise();
  }
}
