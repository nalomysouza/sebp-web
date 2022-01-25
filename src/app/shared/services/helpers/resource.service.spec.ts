import { QueryOptions } from '@app/shared/model/helpers/query.options';
import { Resource } from '@app/shared/model/helpers/resource.model';
import { DomainSerializer } from '@app/shared/serializables/helpers/domain.serializer';
import { of, throwError } from 'rxjs';
import { ResourceService } from './resource.service';

describe("ResourceService<T>", () => {
  class Test extends Resource { }
  class TestSerializer extends DomainSerializer<Test> { }

  let service: ResourceService<Test>;
  let httpClientSpy: any;
  const endpoint = 'test';
  const teste01: Test = { id: 1 } as Test;
  const msgErro = 'Erro';

  beforeEach(() => {
    httpClientSpy = { post: jest.fn(), get: jest.fn(), put: jest.fn(), delete: jest.fn(), };

    service = new ResourceService<Test>(httpClientSpy, endpoint, new TestSerializer(Test));
  });

  it('criando instancia', () => {
    expect(service instanceof ResourceService).toBeTruthy();
  });

  describe('save()', () => {
    it('deve executar com sucesso', () => {
      jest.spyOn(httpClientSpy, 'post').mockReturnValue(of(teste01));
      service.save(teste01).subscribe(response => expect(response).toBe(teste01));
    });

    it('deve executar com erro', () => {
      jest.spyOn(httpClientSpy, 'post').mockReturnValue(throwError(msgErro));
      service.save(teste01).subscribe(response => response, err => expect(err).toBe(msgErro));
    });
  });

  describe('update()', () => {
    it('deve executar com sucesso', () => {
      jest.spyOn(httpClientSpy, 'put').mockReturnValue(of(teste01));
      service.update(1, teste01).subscribe(response => expect(response).toBe(teste01));
    });

    it('deve executar com erro', () => {
      jest.spyOn(httpClientSpy, 'put').mockReturnValue(throwError(msgErro));
      service.update(1, teste01).subscribe(response => response, err => expect(err).toBe(msgErro));
    });
  });

  describe('disabled()', () => {
    it('deve executar com sucesso', () => {
      jest.spyOn(httpClientSpy, 'put').mockReturnValue(of(teste01));
      service.enabledOrDisabled(teste01).subscribe(response => expect(response).toBe(!teste01.enabled));
    });
  });

  describe('findById()', () => {
    it('deve executar com sucesso', () => {
      jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(teste01));
      service.findById(1).subscribe(response => expect(response).toBe(teste01));
    });

    it('deve executar com erro', () => {
      jest.spyOn(httpClientSpy, 'get').mockReturnValue(throwError(msgErro));
      service.findById(1).subscribe(response => response, err => expect(err).toBe(msgErro));
    });
  });

  describe('all()', () => {
    it('deve executar com sucesso', () => {
      jest.spyOn(httpClientSpy, 'get').mockReturnValue(of([teste01]));
      service.all().subscribe(response => expect(response.length).toBeGreaterThan(0));
    });
  });

  describe('allPageable()', () => {
    it('deve executar com sucesso', () => {
      jest.spyOn(httpClientSpy, 'get').mockReturnValue(of([teste01]));
      service.allPageable().subscribe(response => expect(response.size).toBeGreaterThan(0));
    });
  });

  describe('delete()', () => {
    it('deve executar com sucesso', () => {
      jest.spyOn(httpClientSpy, 'delete').mockReturnValue(of({}));
      service.delete(1).subscribe(response => expect(response).toBe({}));
    });
  });

  describe('Auxiliares()', () => {
    it('convertData', () => {
      expect(service.urlEndpoint).toBe('http://localhost:8080/test');
    });
  });
});
