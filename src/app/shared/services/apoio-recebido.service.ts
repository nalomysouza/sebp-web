import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApoioRecebido } from '../model/apoio-recebido.model';
import { ApoioRecebidoSerializer } from '../serializables/apoio-recebido.serializer';
import { ResourceService } from './helpers/resource.service';

@Injectable({
  providedIn: 'root'
})
export class ApoioRecebidoService extends ResourceService<ApoioRecebido>{

  static RESOURCE: any = 'apoios-recebidos';

  constructor(private http: HttpClient) {
    super(http, ApoioRecebidoService.RESOURCE, new ApoioRecebidoSerializer(ApoioRecebido));
  }

  public findByBibliotecaId(bibliotecaId: number): Observable<ApoioRecebido> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}/biblioteca/${bibliotecaId}`).pipe(
        map(data => this.serializer.fromJson(data) as ApoioRecebido),
        catchError(this.handleError)
      );
  }

}
