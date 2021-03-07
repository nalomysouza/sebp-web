import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private _authService: AuthenticationService) { }

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
    this._authService.signIn(username, password).subscribe(
      data => {
        console.log('data =>', data);
        debugger
        //this.tokenStorage.saveToken(data.accessToken);
        //this.tokenStorage.saveUser(data);

        //this.reloadPage();
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
