import { CurrentUser } from '@app/shared/model/helpers/current-user.model';
import { User } from '@app/shared/model/user.model';
import { AUTH } from '@app/shared/utils/constants';
import { TokenStorageService } from './token-storage.service';

describe('TokenStorageService', () => {
  let service: TokenStorageService;
  let user: User;
  let currentuser: CurrentUser;

  beforeEach(() => {
    user = { id: 1, username: 'teste', email: 'teste@teste' };
    currentuser = new CurrentUser(user, 'token');

    service = new TokenStorageService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve adicionar o currentUser no storage signIn()', () => {
    service.signIn(currentuser);

    expect(window.sessionStorage.getItem(AUTH.TOKEN_KEY)).toBe('token');
    expect(window.sessionStorage.getItem(AUTH.USER_KEY)).toBe(JSON.stringify(user));
  });

  it('deve remover o currentUser no storage signOut()', () => {
    service.signIn(currentuser);
    expect(window.sessionStorage.getItem(AUTH.USER_KEY)).toBe(JSON.stringify(user));

    service.signOut();
    expect(window.sessionStorage.getItem(AUTH.TOKEN_KEY)).toBeNull();
    expect(window.sessionStorage.getItem(AUTH.USER_KEY)).toBeNull();
  });

  describe('isLoggedIn()', () => {
    it('Deve possuir usuário logado', () => {
      service.signIn(currentuser);
      expect(service.isLoggedIn).toBe(true);
    });

    it('Não deve possuir usuário logado', () => {
      service.signOut();
      expect(service.isLoggedIn).toBe(false);
    });
  });

  describe('user()', () => {
    it('Deve possuir usuário', () => {
      service.signIn(currentuser);
      expect(service.user).not.toBeNull();
    });

    it('Não deve possuir usuário e retornar null', () => {
      service.signOut();
      expect(service.user).toBeNull();
    });
  });

  describe('token()', () => {
    it('Deve possuir token', () => {
      service.signIn(currentuser);
      expect(service.token).not.toBeNull();
    });

    it('Não deve possuir token e retornar null', () => {
      service.signOut();
      expect(service.token).toBeNull();
    });
  });

});
