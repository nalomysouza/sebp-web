import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeitorComponent } from './leitor.component';

describe('LeitorComponent', () => {
  let component: LeitorComponent;
  let fixture: ComponentFixture<LeitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
