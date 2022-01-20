import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Acervo } from '../model/acervo.model';
import { AcervoSerializer } from '../serializables/acervo.serializer';
import { ResourceService } from './helpers/resource.service';

@Injectable({
  providedIn: 'root'
})
export class AcervoService extends ResourceService<Acervo>{

  static RESOURCE: any = 'v1/acervo';

  constructor(private http: HttpClient) {
    super(http, AcervoService.RESOURCE, new AcervoSerializer(Acervo));
  }
}
