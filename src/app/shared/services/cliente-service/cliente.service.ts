import { Observable } from 'rxjs/Rx';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

import { Cliente } from './../../../models';
import { ManipuladorErro } from './../';
import { AuthHttp } from 'angular2-jwt';


@Injectable()
export class ClienteService {

  private url: string = 'http://165.227.78.113:3000/api/clientes';


  constructor(private _http: AuthHttp) { }

  retornarTodos(cnpjCpf?: any): Observable <Cliente[]> {

    return this._http.get(this.url, { params: { cnpj_cpf: cnpjCpf } })
                     .map(res => res.json() as Cliente[])
                     .catch(ManipuladorErro.lidaComErro);
  }

  retornarUm(_id): Observable <Cliente> {
    return this._http.get(`${this.url}/${_id}`)
                     .map(res => res.json() as Cliente)
                     .catch(ManipuladorErro.lidaComErro);
  }

  novoCliente(cliente: Cliente): Observable <Cliente> {
    const headers = new Headers({ 'Content-Type' : 'application/json' });
    const options = new RequestOptions({ headers });

    return this._http.post(this.url, cliente, options)
                     .map(res => res.json() as Cliente)
                     .catch(ManipuladorErro.lidaComErro);
  }

  atualizarCliente(cliente): Observable <Cliente> {
    const headers = new Headers({ 'Content-Type' : 'application/json' });
    const options = new RequestOptions({ headers });

    return this._http.put(`${this.url}${cliente._id}/`, cliente, options)
                     .map(res => res.json() as Cliente)
                     .catch(ManipuladorErro.lidaComErro);
  }
}

