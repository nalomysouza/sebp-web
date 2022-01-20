import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApoioRecebido } from '../model/apoio-recebido.model';
import { ApoioRecebidoSerializer } from '../serializables/apoio-recebido.serializer';
import { ResourceService } from './helpers/resource.service';

@Injectable({
  providedIn: 'root'
})
export class ApoioRecebidoService extends ResourceService<ApoioRecebido>{

  static RESOURCE: any = 'v1/apoio-recebido';

  constructor(private http: HttpClient) {
    super(http, ApoioRecebidoService.RESOURCE, new ApoioRecebidoSerializer(ApoioRecebido));
  }
}
