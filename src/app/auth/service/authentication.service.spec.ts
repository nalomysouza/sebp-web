import { User } from '@app/shared/model/user.model';
import { of, throwError } from 'rxjs';
import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let httpClientSpy: any;
  let userMock01: User;

  beforeEach(() => {
    httpClientSpy = { post: jest.fn };
    userMock01 = { id: 1, username: 'teste', password: 'teste' };

    service = new AuthenticationService(httpClientSpy);
  });

  it('created', () => {
    expect(service).toBeTruthy();
  });

  describe('signIn()', () => {
    it('deve executar com sucesso', () => {
      jest.spyOn(httpClientSpy, 'post').mockReturnValue(of(userMock01));

      service
        .signIn(userMock01)
        .subscribe(response => expect(response).toBe(userMock01));
    });

    it('deve executar com erro', () => {
      jest.spyOn(httpClientSpy, 'post').mockReturnValue(throwError('Erro'));

      service
        .signIn(userMock01)
        .subscribe(response => response, error => expect(error).toBe('Erro'));
    });
  });

  describe('signUp()', () => {
    it('deve executar com sucesso', () => {
      jest.spyOn(httpClientSpy, 'post').mockReturnValue(of(userMock01));

      service
        .signUp(userMock01)
        .subscribe(response => expect(response).toBe(userMock01));
    });

    it('deve executar com erro', () => {
      jest.spyOn(httpClientSpy, 'post').mockReturnValue(throwError('Erro'));

      service
        .signUp(userMock01)
        .subscribe(response => response, error => expect(error).toBe('Erro'));
    });
  });
});
