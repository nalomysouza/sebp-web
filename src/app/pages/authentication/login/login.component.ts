import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/_services/auth.service';
import { CurrentUser } from 'src/app/shared/model/current-user.model';
import { AuthenticationService } from '../authentication.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _authenticationService: AuthenticationService,
    private _authService: AuthService
  ) { }

  validateForm!: FormGroup;

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: ['ADMIN', [Validators.required]],
      password: ['123456', [Validators.required]],
      //remember: [true]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (!this.validateForm.invalid) {

      this.isLoading = true;
      let { username, password } = this.validateForm.value;
      this._authenticationService.signIn(username, password).subscribe(
        data => {
          let user = new CurrentUser(
            { id: data.id, username: data.username, email: data.email }, data.accessToken
          );
          this._authService.login(user);
          this.isLoading = false;
          this.router.navigate(['/']);
        }, err => this.isLoading = false
      );
    }
  }

  reloadPage(): void {
    window.location.reload();
  }
}
