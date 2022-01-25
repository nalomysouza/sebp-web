import { AcervoService } from './acervo.service';

describe('AcervoService', () => {
  let service: AcervoService;
  let httpClientSpy: any;

  beforeEach(() => {
    httpClientSpy = { post: jest.fn(), get: jest.fn(), put: jest.fn(), delete: jest.fn(), };
    service = new AcervoService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
