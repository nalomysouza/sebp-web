import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Acervo } from '../model/acervo.model';
import { ApoioRecebido } from '../model/apoio-recebido.model';
import { Biblioteca } from '../model/biblioteca.model';
import { BibliotecaSerializer } from '../serializables/biblioteca.serializer';
import { ResourceService } from './helpers/resource.service';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService extends ResourceService<Biblioteca>{

  static RESOURCE: any = 'v1/biblioteca';

  constructor(private http: HttpClient) {
    super(http, BibliotecaService.RESOURCE, new BibliotecaSerializer(Biblioteca));
  }

  findApoioRecebidoByBiblioteca(id: number): Observable<ApoioRecebido> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}/${id}/apoio-recebido`).pipe(
        map(data => this.serializer.fromJson(data ? data : new ApoioRecebido()) as ApoioRecebido),
        catchError(this.handleError)
      );
  }

  findAcervoByBiblioteca(id: number): Observable<Acervo> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}/${id}/acervo`).pipe(
        map(data => this.serializer.fromJson(data ? data : new Acervo()) as Acervo),
        catchError(this.handleError)
      );
  }
}
