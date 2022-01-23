import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SebpAcoesFormComponent } from './sebp-acoes-form.component';

describe('SebpAcoesFormComponent', () => {
  let component: SebpAcoesFormComponent;
  let fixture: ComponentFixture<SebpAcoesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SebpAcoesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SebpAcoesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
