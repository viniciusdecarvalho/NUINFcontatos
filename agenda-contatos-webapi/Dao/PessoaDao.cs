using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Models;

namespace Dao
{

    public interface IPessoaDao
    {
        IEnumerable<Pessoa> ListarTodos();
        Pessoa Recuperar(long id);
        void Salvar(Pessoa pessoa);
        void Remover(Pessoa pessoa);
    }

    public class PessoaDao: IPessoaDao
    {
        private Contexto _contexto;

        public PessoaDao(Contexto contexto)
        {
            this._contexto = contexto;

            if (this._contexto.Pessoas.Count() == 0)
            {
                Pessoa pessoa = new Pessoa() { Nome = "Arnaldo", Email = "arnaldo@mail.com", CPF = "900317888-23", DataNascimento = DateTime.Parse("1998-08-01") };
                Telefone telefone = new Telefone() { DDD = 85, Numero = "90824928982", Pessoa = pessoa };
                this._contexto.Pessoas.Add(pessoa);
                this._contexto.Telefones.AddRange(telefone);
                this._contexto.SaveChanges();
            }
        }

        public IEnumerable<Pessoa> ListarTodos() 
        {
            return this._contexto.Pessoas.Include(p => p.Telefones);
        }

        public Pessoa Recuperar(long id) => this._contexto.Pessoas.Find(id);

        public void Salvar(Pessoa pessoa)
        {
            if (pessoa.Id > 0)
                this._contexto.Pessoas.Add(pessoa);
            else 
                this._contexto.Pessoas.Update(pessoa);

            this._contexto.SaveChanges();
        }

        public void Remover(Pessoa pessoa)
        {
            this._contexto.Pessoas.Remove(pessoa);
            this._contexto.SaveChanges();
        }
    }

}