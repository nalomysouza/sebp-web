import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Escolaridade } from '../model/escolaridade.model';
import { IntervaloLivro } from '../model/intervalo-livro.model';
import { Mesorregiao } from '../model/mesorregiao.model';
import { Microrregiao } from '../model/microrregiao.model';
import { MotivoFrequencia } from '../model/motivo-frequencia.model';
import { Municipio } from '../model/municipio.model';
import { Periodico } from '../model/periodico.model';
import { TipoBiblioteca } from '../model/tipo-biblioteca.model';
import { API } from './helpers/api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  readonly PATH = '/v1/help';

  constructor(private _http: HttpClient) { }

  public getEscolaridades(): Observable<Escolaridade[]> {
    return this._http.get(`${API.concat(this.PATH)}/escolaridade`, httpOptions).pipe(map((data: any) => data));
  }

  public getIntervalosLivro(): Observable<IntervaloLivro[]> {
    return this._http.get(`${API.concat(this.PATH)}/intervalo-livro`, httpOptions).pipe(map((data: any) => data));
  }

  public getMotivosFrequencias(): Observable<MotivoFrequencia[]> {
    return this._http.get(`${API.concat(this.PATH)}/motivo-frequencia`, httpOptions).pipe(map((data: any) => data));
  }

  public getPeriodicos(): Observable<Periodico[]> {
    return this._http.get(`${API.concat(this.PATH)}/periodico`, httpOptions).pipe(map((data: any) => data));
  }

  public getTiposBiliotecas(): Observable<TipoBiblioteca[]> {
    return this._http.get(`${API.concat(this.PATH)}/tipo-bilioteca`, httpOptions).pipe(map((data: any) => data));
  }

  public getMunicipios(): Observable<Municipio[]> {
    return this._http.get(`${API.concat(this.PATH)}/municipio`, httpOptions).pipe(map((data: any) => data));
  }

  public getMicrorregioes(): Observable<Microrregiao[]> {
    return this._http.get(`${API.concat(this.PATH)}/microrregiao`, httpOptions).pipe(map((data: any) => data));
  }

  public getMesorregioes(): Observable<Mesorregiao[]> {
    return this._http.get(`${API.concat(this.PATH)}/mesorregiao`, httpOptions).pipe(map((data: any) => data));
  }

}
