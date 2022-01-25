import { of, throwError } from 'rxjs';
import { Acervo } from '../model/acervo.model';
import { ApoioRecebido } from '../model/apoio-recebido.model';
import { BibliotecaService } from './biblioteca.service';

describe('BibliotecaService', () => {
  let service: BibliotecaService;
  let httpClientSpy: any;
  const msgErro = 'Erro';

  beforeEach(() => {
    httpClientSpy = { post: jest.fn(), get: jest.fn(), put: jest.fn(), delete: jest.fn(), };
    service = new BibliotecaService(httpClientSpy);
  });

  it('created', () => {
    expect(service).toBeTruthy();
  });

  describe('findApoioRecebidoByBiblioteca()', () => {
    it('deve executar com sucesso', () => {
      const apoioRecebido = new ApoioRecebido();
      jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(apoioRecebido));
      service.findApoioRecebidoByBiblioteca(1).subscribe(response => expect(response).toBe(apoioRecebido));
    });

    it('deve executar com erro', () => {
      jest.spyOn(httpClientSpy, 'get').mockReturnValue(throwError(msgErro));
      service.findApoioRecebidoByBiblioteca(1).subscribe(response => response, err => expect(err).toBe(msgErro));
    });
  });

  describe('findAcervoByBiblioteca()', () => {
    it('deve executar com sucesso', () => {
      const acervo = new Acervo();
      jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(acervo));
      service.findAcervoByBiblioteca(1).subscribe(response => expect(response).toBe(acervo));
    });

    it('deve executar com erro', () => {
      jest.spyOn(httpClientSpy, 'get').mockReturnValue(throwError(msgErro));
      service.findAcervoByBiblioteca(1).subscribe(response => response, err => expect(err).toBe(msgErro));
    });
  });
});
