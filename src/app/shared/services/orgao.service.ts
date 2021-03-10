import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orgao } from '../model/orgao.model';
import { OrgaoSerializer } from '../serializables/orgao-serializer';
import { ResourceService } from './helpers/resource.service';

@Injectable({
  providedIn: 'root'
})
export class OrgaoService extends ResourceService<Orgao>{

  static RESOURCE: any = 'orgaos';

  constructor(private http: HttpClient) {
    super(http, OrgaoService.RESOURCE, new OrgaoSerializer(Orgao));
  }
}
