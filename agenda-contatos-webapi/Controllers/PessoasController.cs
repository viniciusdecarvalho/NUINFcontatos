using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dao;
using Dto;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace agenda_contatos_webapi.Controllers
{
    [EnableCors("MyPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class PessoasController : ControllerBase
    {

        private readonly PessoaDao _pessoaDao;

        public PessoasController(PessoaDao pessoaDao)
        {
            this._pessoaDao = pessoaDao;
        }


        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<PessoaDto>> Get()
        {
            return _pessoaDao.ListarTodos()
                        .Select(p => new PessoaDto() {
                            id = p.Id,
                            nome = p.Nome,
                            email = p.Email,
                            cpf = p.CPF,
                            dataNascimento = p.DataNascimento,
                            telefones = p.Telefones.Select(t => new TelefoneDto() {
                                id = t.Id,
                                ddd = t.DDD,
                                numero = t.Numero
                            }).ToList()
                        })
                        .ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<PessoaDto> Get(long id)
        {
            Pessoa pessoa = this._pessoaDao.Recuperar(id);
            if (pessoa == null)
            {
                return NotFound();
            }
            return new PessoaDto() {
                id = pessoa.Id,
                nome = pessoa.Nome,
                email = pessoa.Email,
                cpf = pessoa.CPF,
                dataNascimento = pessoa.DataNascimento,
                telefones = pessoa.Telefones.Select(t => new TelefoneDto() {
                    id = t.Id,
                    ddd = t.DDD,
                    numero = t.Numero
                }).ToList()
            };
        }

        // POST api/values
        [HttpPost]
        public IActionResult Create(Pessoa pessoa)
        {
            this._pessoaDao.Salvar(pessoa);

            return CreatedAtRoute("Get", new { id = pessoa.Id }, pessoa);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Update(long id = 0, PessoaDto pessoa = null)
        {
            Pessoa pessoadb = this._pessoaDao.Recuperar(id);
            if (pessoadb == null)
            {
                return NotFound();
            }

            pessoadb.Nome = pessoa.nome;
            pessoadb.CPF = pessoa.cpf;
            pessoadb.DataNascimento = pessoa.dataNascimento;
            pessoadb.Email = pessoa.email;
            pessoadb.Telefones = pessoa.telefones.Select(t => new Telefone() { DDD = t.ddd, Numero = t.numero }).ToList();

            this._pessoaDao.Salvar(pessoadb);

            return NoContent();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            Pessoa pessoa = this._pessoaDao.Recuperar(id);
            if (pessoa == null)
            {
                return NotFound();
            }
            
            this._pessoaDao.Remover(pessoa);

            return NoContent();
        }
    }
}
