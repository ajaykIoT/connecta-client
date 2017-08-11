import { AtendimentoModel } from './../atendimento/atendimento.interface';

export interface TecnicoModel {
    id: number;
    nome: string;
    rg: string;
    cpf: string;
    data_nasc: string;
    email: string;
    telefone: string;
    celular: string;
    observacao: string;
    cnh: string;
    validade_carteira: string;
    rua: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    createdAt: string;
    updatedAt: string;
    atendimentos: AtendimentoModel[];
}
