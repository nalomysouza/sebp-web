import { of } from 'rxjs';
import { BibliotecaFormComponent } from './biblioteca-form.component';

describe('BibliotecaFormComponent', () => {
  let component: BibliotecaFormComponent;
  let routerStub: any;
  let activatedRouteStub: any;

  beforeEach(() => {
    routerStub = {
      url: '/test',
      navigate: jest.fn()
    }
    activatedRouteStub = {
      queryParams: of({ codigoBiblioteca: 1 })
    }
    component = new BibliotecaFormComponent(routerStub, activatedRouteStub);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit', () => {
    component.ngOnInit();
    expect(component.codigoBiblioteca).toBe(1);
    expect(component.desabilitarRotas).toBeFalsy();
  });

  describe('isActiveRouter', () => {
    it('resultado true', () => {
      expect(component.isActiveRouter('/test')).toBe(true);
    });
    it('resultado false', () => {
      expect(component.isActiveRouter('/')).toBe(false);
    });
  });

  describe('proximaRota', () => {
    it('resultado true', () => {
      component.proximaRota('/test');
      expect(routerStub.navigate).toBeCalled();
    });
  });
});
