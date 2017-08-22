export interface Funcionario {
  _id?: string;
  createdAt: string;
  updatedAt: string;
  nome: string;
  endereco: Endereco;
  cpf: string;
  rg: string;
  tel1: string;
  habilitacao: Habilitacao;
  tipo: string[];
  email: string;
  tel2: string;
  login: Login;
  photo_url: string;
}

interface Login {
  username: string;
  password: string;
}

interface Habilitacao {
  nunmero: string;
  validade: string;
}

interface Endereco {
  rua: string;
  bairro: string;
  estado: string;
  cidade: string;
  cep: string;
  _id: string;
  ponto_referencia: string;
  complemento: string;
}