import { OrgaoService } from './orgao.service';

describe('OrgaoService', () => {
  let service: OrgaoService;
  let httpClientSpy: any;

  beforeEach(() => {
    httpClientSpy = { post: jest.fn(), get: jest.fn(), put: jest.fn(), delete: jest.fn(), };

    service = new OrgaoService(httpClientSpy);
  });

  it('created', () => {
    expect(service).toBeTruthy();
  });
});
