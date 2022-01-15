import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoioRecebidoComponent } from './apoio-recebido.component';

describe('ApoioRecebidoComponent', () => {
  let component: ApoioRecebidoComponent;
  let fixture: ComponentFixture<ApoioRecebidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApoioRecebidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoioRecebidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
