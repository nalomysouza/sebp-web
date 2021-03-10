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
export class ApiService {
  constructor(private _http: HttpClient) { }

  public getEscolaridades(): Observable<Escolaridade[]> {
    return this._http.get(`${API}/v1/escolaridades`, httpOptions).pipe(map((data: any) => data));
  }

  public getIntervalosLivro(): Observable<IntervaloLivro[]> {
    return this._http.get(`${API}/v1/intervalos/livro`, httpOptions).pipe(map((data: any) => data));
  }

  public getMotivosFrequencia(): Observable<MotivoFrequencia[]> {
    return this._http.get(`${API}/v1/motivos/frequencia`, httpOptions).pipe(map((data: any) => data));
  }

  public getPeriodicos(): Observable<Periodico[]> {
    return this._http.get(`${API}/v1/periodicos`, httpOptions).pipe(map((data: any) => data));
  }

  public getTiposBilioteca(): Observable<TipoBiblioteca[]> {
    return this._http.get(`${API}/v1/tipos/bilioteca`, httpOptions).pipe(map((data: any) => data));
  }

  public getMunicipios(): Observable<Municipio[]> {
    return this._http.get(`${API}/v1/municipios`, httpOptions).pipe(map((data: any) => data));
  }

  public getMicrorregioes(): Observable<Microrregiao[]> {
    return this._http.get(`${API}/v1/microrregioes`, httpOptions).pipe(map((data: any) => data));
  }

  public getMesorregioes(): Observable<Mesorregiao[]> {
    return this._http.get(`${API}/v1/mesorregioes`, httpOptions).pipe(map((data: any) => data));
  }

}
