import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/_services/auth.service';
import { CurrentUser } from 'src/app/shared/model/current-user.model';
import { AuthenticationService } from '../authentication.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private _authenticationService: AuthenticationService,
    private _authService: AuthService
  ) { }

  validateForm!: FormGroup;

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      //remember: [true]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    let { username, password } = this.validateForm.value;
    this._authenticationService.signIn(username, password).subscribe(
      data => {
        let user = new CurrentUser(
          { id: data.id, username: data.username, email: data.email }, data.accessToken
        );
        this._authService.login(user);
        this.reloadPage();
      },
      err => {
        console.log('err =>', err);
        //this.errorMessage = err.error.message;
        //this.isLoginFailed = true;
      }
    )
  }

  reloadPage(): void {
    window.location.reload();
  }
}
