import { Validators } from '@angular/forms';
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

  it('observando o reloadPage()', () => {
    expect(component.reloadPage()).toBeUndefined();
  });
});
