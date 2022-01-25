import { ApoioRecebidoService } from './apoio-recebido.service';

describe('ApoioRecebidoService', () => {
  let service: ApoioRecebidoService;
  let httpClientSpy: any;

  beforeEach(() => {
    httpClientSpy = { post: jest.fn(), get: jest.fn(), put: jest.fn(), delete: jest.fn(), };
    service = new ApoioRecebidoService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
