import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaFormSobreComponent } from './biblioteca-form-sobre.component';

describe('BibliotecaFormSobreComponent', () => {
  let component: BibliotecaFormSobreComponent;
  let fixture: ComponentFixture<BibliotecaFormSobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliotecaFormSobreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecaFormSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
