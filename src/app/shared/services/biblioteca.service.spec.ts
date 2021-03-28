import { TestBed } from '@angular/core/testing';

import { BibliotecaService } from './biblioteca.service';

describe('BibliotecaService', () => {
  let service: BibliotecaService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new BibliotecaService(httpClientSpy as any);
  });

  it('created', () => {
    expect(service).toBeTruthy();
  });
});
