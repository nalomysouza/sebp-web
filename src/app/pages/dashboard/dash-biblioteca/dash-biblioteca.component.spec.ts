import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBibliotecaComponent } from './dash-biblioteca.component';

describe('DashBibliotecaComponent', () => {
  let component: DashBibliotecaComponent;
  let fixture: ComponentFixture<DashBibliotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBibliotecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
