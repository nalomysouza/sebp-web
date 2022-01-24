import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;

  beforeEach(() => {
    component = new LayoutComponent();
  });

  it('should create', () => {
    expect(component instanceof LayoutComponent).toBeTruthy();
  });

  it('quantidade de menus maior que zero', () => {
    expect(component.menus.length).toBeGreaterThan(0);
  });
});
