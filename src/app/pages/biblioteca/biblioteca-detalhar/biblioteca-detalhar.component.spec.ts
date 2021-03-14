import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaDetalharComponent } from './biblioteca-detalhar.component';

describe('BibliotecaDetalharComponent', () => {
  let component: BibliotecaDetalharComponent;
  let fixture: ComponentFixture<BibliotecaDetalharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliotecaDetalharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecaDetalharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
