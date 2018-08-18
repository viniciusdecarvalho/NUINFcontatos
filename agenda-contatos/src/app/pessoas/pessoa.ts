export class Pessoa {
    
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    email: string;
    telefones: Telefone[] = [];
    
    get idade() { return (new Date().getFullYear() - this.dataNascimento.getFullYear()); }
    
    constructor(data?: any) {
        if (data) {
            this.id = data.id || 0;
            this.nome = data.nome || "";
            this.cpf = data.cpf || "";
            this.dataNascimento = new Date(Date.parse(data.dataNascimento || "01/01/1900"));
            this.email = data.email || "";
            this.telefones = data.telefones || [];
        }
    }

    adicionarTelefone(telefone: Telefone): void {
        this.telefones.unshift(telefone);
    }

    removerTelefone(telefone: Telefone): void {
        this.telefones.splice(this.telefones.indexOf(telefone), 1);
    }
}

export class Telefone {

    id: number;
    ddd: string;
    numero: string;

}