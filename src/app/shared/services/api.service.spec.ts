import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { asyncError } from 'src/app/helpers/testing/observable-helpers';
import { Escolaridade } from '../model/escolaridade.model';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let apiService: ApiService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    apiService = new ApiService(httpClientSpy as any);
  });

  it('created instance ApiService', () => {
    expect(apiService).toBeTruthy();
  });

  it('getEscolaridades (HttpClient called once)', () => {
    const expectedEscolaridades: Escolaridade[] = [{ id: 1, descricao: 'MEDIO' }, { id: 2, descricao: 'SUPERIOR' }];

    httpClientSpy.get.and.returnValue(of(expectedEscolaridades));

    apiService.getEscolaridades().subscribe(
      data => expect(data).toEqual(expectedEscolaridades, 'expected Escolaridades'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one Escolaridades');
  });

  it('getEscolaridades - Servidor retorna error 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'getEscolaridades 404 error',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(asyncError<HttpErrorResponse>(errorResponse));

    apiService.getEscolaridades().subscribe(
      () => fail('getEscolaridades expected 404 error'),
      er => expect(er.error).toContain('getEscolaridades 404 error')
    );
  });

});
