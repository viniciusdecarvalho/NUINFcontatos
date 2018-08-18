using Microsoft.EntityFrameworkCore;

namespace Models 
{

    public class Contexto: DbContext 
    {
        public Contexto(DbContextOptions<Contexto> options): base(options)
        {}
        public DbSet<Pessoa> Pessoas { get; set; }
        public DbSet<Telefone> Telefones { get; set; }
    }

}