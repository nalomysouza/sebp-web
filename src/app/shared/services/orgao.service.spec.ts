import { TestBed } from '@angular/core/testing';

import { OrgaoService } from './orgao.service';

describe('OrgaoService', () => {
  let service: OrgaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrgaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
