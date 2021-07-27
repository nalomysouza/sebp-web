import { TestBed } from '@angular/core/testing';

import { ApoioRecebidoService } from './apoio-recebido.service';

describe('ApoioRecebidoService', () => {
  let service: ApoioRecebidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApoioRecebidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
