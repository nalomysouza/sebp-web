import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from '@app/core/_services/token-storage.service';
import { CurrentUser } from '@app/shared/model/helpers/current-user.model';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _authService: AuthenticationService,
    private _storageService: TokenStorageService,
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
      const { username, password } = this.validateForm.value;

      this._authService.signIn(username, password).subscribe(data => {
        const user = new CurrentUser(
          { id: data.id, username: data.username, email: data.email }, data.accessToken
        );
        this._storageService.signIn(user);
        this.router.navigate(['/']);
      }).add(() => this.isLoading = false);
    }
  }

  reloadPage(): void {
    window.location.reload();
  }
}
