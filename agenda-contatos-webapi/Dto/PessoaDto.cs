using System;
using System.Collections.Generic;
using System.Linq;
using Models;

namespace Dto
{
    public class PessoaDto
    {

        public int id { get; set; }
        public string nome { get; set; }
        public string email { get; set; }
        public string cpf { get; set; }
        public DateTime dataNascimento { get; set; }
        public virtual ICollection<TelefoneDto> telefones { get; set; }

    }
}