
using System;
using System.Collections.Generic;

namespace Models 
{
    public class Pessoa 
    {

        public Pessoa() 
        {
            this.Telefones = new List<Telefone>();
        }
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string CPF { get; set; }
        public DateTime DataNascimento { get; set; }
        public virtual ICollection<Telefone> Telefones { get; set; }
        public int Idade { get { return Convert.ToInt32(DateTime.Now.Subtract(this.DataNascimento).Days / 365.25); } }
    }
}