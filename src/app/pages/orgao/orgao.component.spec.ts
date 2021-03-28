import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Orgao } from 'src/app/shared/model/orgao.model';
import { OrgaoService } from 'src/app/shared/services/orgao.service';

import { OrgaoComponent } from './orgao.component';
class MockOrgaoService {
  updateEnabled = (orgao: Orgao) => { return Object.assign(orgao, { enabled: !orgao.enabled }) }
  readAll = () => { return Object.assign(new Orgao, { id: 1, nome: 'Test' }) }
}

describe('OrgaoComponent', () => {
  let component: OrgaoComponent;
  let fixture: ComponentFixture<OrgaoComponent>;
  let mockOrgaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [
        OrgaoComponent,
        { provide: OrgaoService, useClass: MockOrgaoService }
      ]
    });
    component = TestBed.inject(OrgaoComponent);
    mockOrgaoService = TestBed.inject(OrgaoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
