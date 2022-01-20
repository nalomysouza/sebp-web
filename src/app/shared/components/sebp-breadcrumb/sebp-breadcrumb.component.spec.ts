import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SebpBreadcrumbComponent } from './sebp-breadcrumb.component';

describe('SebpBreadcrumbComponent', () => {
  let component: SebpBreadcrumbComponent;
  let fixture: ComponentFixture<SebpBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SebpBreadcrumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SebpBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
