import { TestBed } from '@angular/core/testing';

import { OrgaoService } from './orgao.service';

describe('OrgaoService', () => {
  let service: OrgaoService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new OrgaoService(httpClientSpy as any);
  });

  it('created', () => {
    expect(service).toBeTruthy();
  });

});
