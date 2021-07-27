import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Biblioteca } from '../model/biblioteca.model';
import { BibliotecaSerializer } from '../serializables/biblioteca.serializer';
import { ResourceService } from './helpers/resource.service';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService extends ResourceService<Biblioteca>{

  static RESOURCE: any = 'bibliotecas';

  constructor(private http: HttpClient) {
    super(http, BibliotecaService.RESOURCE, new BibliotecaSerializer(Biblioteca));
  }
}
