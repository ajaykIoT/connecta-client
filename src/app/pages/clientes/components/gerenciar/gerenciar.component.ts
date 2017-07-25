import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerenciar',
  templateUrl: './gerenciar.component.html',
  styleUrls: ['./gerenciar.component.scss']
})
export class GerenciarComponent implements OnInit {

  settings = {
    actions: false,
    columns: 
    {
      cpf_cnpj: { 
        title: 'CPF/CNPJ',     
        type: 'number'  
      },
      razao_social: { 
        title: 'Razão social', 
        type: 'string' },
      email: { 
        title: 'E-mail',      
        type: 'string' 
      },
      telefone: { 
        title: 'Telefone',     
        type: 'string' 
      },
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
