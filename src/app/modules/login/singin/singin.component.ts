import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SignInModel } from 'src/app/interfaces/signin.interface';
import { ServicesService } from 'src/app/services/services.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})

export class SinginComponent {
  constructor(
    protected generalService: ServicesService,
    private service: LoginService,
    private fb: FormBuilder,
    private router: Router) { }

  signInForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  postSignIn() {
    if (this.signInForm.controls["email"].value && this.signInForm.controls["password"].value) {
      const form: SignInModel = {
        email: this.signInForm.controls["email"].value,
        password: this.signInForm.controls["password"].value
      }
      this.service.signIn(form)
    }
  }

  postSignInFire() {
    this.service.googleLogin()
      .then(response => {
        if (response.user.email) {
          this.service.checkByEmail(response.user.email)
        }
      })
  }
}
