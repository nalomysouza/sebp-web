import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Biblioteca } from 'src/app/shared/model/biblioteca.model';
import { BibliotecaService } from 'src/app/shared/services/biblioteca.service';
import { BibliotecaComponent } from './biblioteca.component';

class MockBibliotecaService {
  readreadAllPageable = (pageIndex: number = 0, pageSize: number = 1) => {
    return Object.assign(new Biblioteca, { id: 1, nome: 'Test' })
  }
}

describe('BibliotecaComponent', () => {
  let component: BibliotecaComponent;
  let fixture: ComponentFixture<BibliotecaComponent>;
  let mockBibliotecaService: BibliotecaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        BibliotecaComponent,
        { provide: BibliotecaService, useClass: MockBibliotecaService }
      ]
    });
    component = TestBed.inject(BibliotecaComponent);
    mockBibliotecaService = TestBed.inject(BibliotecaService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
