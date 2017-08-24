import { ViewCell, LocalDataSource } from 'ng2-smart-table';
import { Component, OnInit, Input } from '@angular/core';

import { FuncionarioService } from './../../../../shared/services';
import { Funcionario } from './../../../../models';

@Component({
  selector: 'button-view',
  template: `
  <button type="button" class="btn btn-info btn-block"
  routerLink="/pages/funcionarios/detalhes/{{ idFuncionario }}"><i class="ion-ios-redo"></i> Detalhes</button>`,
  styleUrls: ['./../../../../shared/styles/smart-table.component.scss']
  
})
export class BtnDetalhesTecComponent implements ViewCell, OnInit {
  
  idFuncionario: string;

  @Input() value: string | number;

  constructor() {}

  ngOnInit() {
    this.idFuncionario = this.value.toString().toUpperCase();
  }
}

@Component({
  selector: 'app-gerenciar',
  templateUrl: './gerenciar.component.html',
  styleUrls: ['./../../../../shared/styles/smart-table.component.scss']
})
export class GerenciarComponent implements OnInit {

  tecnicos: Funcionario[];
  tecnicoSelecionado;

  settings = {
    actions: false,
    noDataMessage: 'Nenhum dado encontrado',
    columns: {
      nome: {
        title: 'Nome',
        type: 'number'
      },
      cpf: {
        title: 'CPF',
        type: 'string'
      },
      rg: {
        title: 'RG',
        type: 'string'
      },
      telefone: {
        title: 'Telefone',
        type: 'string'
      },
      celular: {
        title: 'Celular',
        type: 'string'
      },
      id: {
        type: 'custom',
        filter: false,
        renderComponent: BtnDetalhesTecComponent
      }
    }
  };

  source: LocalDataSource;

  constructor(private _funcionarioService: FuncionarioService) {
    this.source = new LocalDataSource();
  }

  ngOnInit() {
    this._funcionarioService.retornarTodos().subscribe(funcionarios => {
        this.source.load(funcionarios);
    });
  }
}

