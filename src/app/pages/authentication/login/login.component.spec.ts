import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/_services/auth.service';
import { AssetsService } from 'src/app/shared/services/assets.service';
import { AuthenticationService } from '../authentication.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const fbSpy = jasmine.createSpyObj('FormBuilder', ['group']);
    const authenticationServiceSpy = jasmine.createSpyObj('AuthenticationService', ['signIn']);
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);
    const assetsSpy = jasmine.createSpyObj('AssetsService', ['pathImg']);

    await TestBed.configureTestingModule({
      declarations: [],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        LoginComponent,
        { provide: Router, useValue: routerSpy },
        { provide: FormBuilder, useValue: fbSpy },
        { provide: AuthenticationService, useValue: authenticationServiceSpy },
        { provide: AuthService, useValue: authServiceSpy },
        { provide: AssetsService, useValue: assetsSpy },
      ]

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
