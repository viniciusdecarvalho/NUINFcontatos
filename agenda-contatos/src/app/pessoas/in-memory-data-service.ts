import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const pessoas = [
            {
                id: 1,
                nome: 'Arnaldo', 
                email: 'arnaldo@mail.com', 
                cpf: '900317888-23', 
                dataNascimento: '01/04/1998',
                telefones: [
                    { 
                        id: 1,
                        ddd: 85,
                        numero: '9989-01-65' 
                    }
                ]
            },
            {
                id: 2,
                nome: 'Luiza',
                email: 'luiza@mail.com',
                cpf: '800355906-07',
                dataNascimento: '01/01/2003',
                telefones: [
                    { 
                        id: 1,
                        ddd: 85,
                        numero: '9939-99-87' 
                    },
                    { 
                        id: 2,
                        ddd: 11,
                        numero: '9911-00-83' 
                    },
                    { 
                        id: 3,
                        ddd: 21,
                        numero: '5984-00-77' 
                    }

                ]
            }
        ];

        return { pessoas };
    }
}