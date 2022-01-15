import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaAcessoComponent } from './forma-acesso.component';

describe('FormaAcessoComponent', () => {
  let component: FormaAcessoComponent;
  let fixture: ComponentFixture<FormaAcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormaAcessoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
