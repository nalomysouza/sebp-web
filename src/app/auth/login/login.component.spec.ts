import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let formBuilderStub: any;
  let routerStub: any;
  let authenticationServiceStub: any;
  let tokenStorageServiceStub: any;

  beforeEach(() => {
    formBuilderStub = { group: jest.fn() };
    routerStub = { navigate: jest.fn() };
    authenticationServiceStub = { signIn: jest.fn() };
    tokenStorageServiceStub = { signIn: jest.fn() };

    component = new LoginComponent(formBuilderStub, routerStub, authenticationServiceStub, tokenStorageServiceStub);
  });

  it('should create', () => {
    expect(component instanceof LoginComponent).toBeTruthy();
  });

  it('observando o ngOnInit()', () => {
    const spy = jest.spyOn(formBuilderStub, 'group');
    component.ngOnInit();
    expect(spy).toBeCalled();
  });

  describe('submitForm()', () => {
    it('Deve passar pelo validateForm com sucesso', () => {
      jest.spyOn(authenticationServiceStub, 'signIn').mockReturnValue(of({
        id: 1, username: 'teste', password: '123', email: 'teste@teste'
      }));
      component.validateForm = new FormGroup({
        username: new FormControl('ADMIN', Validators.required),
        password: new FormControl('123456', Validators.required),
      });
      component.submitForm();
      expect(component.validateForm.invalid).toBeFalsy();
    });

    it('Não deve passar pelo validateForm com sucesso', () => {
      jest.spyOn(authenticationServiceStub, 'signIn').mockReturnValue(of({
        id: 1, username: 'teste', password: '123', email: 'teste@teste'
      }));
      component.validateForm = new FormGroup({
        username: new FormControl(undefined, Validators.required),
        password: new FormControl(undefined, Validators.required),
      });
      component.submitForm();
      expect(component.validateForm.invalid).toBe(true);
    });
  });

  it('observando o reloadPage()', () => {
    expect(component.reloadPage()).toBeUndefined();
  });
});
