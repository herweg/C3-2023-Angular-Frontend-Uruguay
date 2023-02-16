import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpModel } from 'src/app/interfaces/signup.interface';
import { ServicesService } from 'src/app/services/services.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent {

  signUpForm: FormGroup = this.fb.group({
    document: ['', Validators.required, Validators.minLength(6)],
    fullName: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    phone: ['', Validators.required, Validators.minLength(9)],
    password: ['', Validators.required, Validators.minLength(8)],
    accountTypeId: ['', Validators.required],
    documentTypeId: ['', Validators.required],
  })

  constructor(
    protected generalService: ServicesService,
    private service: LoginService,
    private fb: FormBuilder,
    private router: Router) { }

  postSignUp() {
    if (this.signUpForm) {
      const form: SignUpModel = {
        email: this.signUpForm.controls["email"].value,
        password: this.signUpForm.controls["password"].value,
        document: this.signUpForm.controls["document"].value,
        fullName: this.signUpForm.controls["fullName"].value,
        phone: this.signUpForm.controls["phone"].value,
        accountTypeId: this.signUpForm.controls["accountTypeId"].value,
        documentTypeId: this.signUpForm.controls["documentTypeId"].value,
      }
      //Register in firebase
      this.service.fireSignUp(form.email, form.password)
        .then(response => {
          console.log(response)
        })
        .catch(error => alert("Algo no esta bien" + error))
      //Register in backend
      this.service.signUp(form)
      //Redirect
      this.router.navigate(["/customer"])
    }
  }

  googleLogin() {
    this.service.googleLogin()
      .then(response => {
        console.log(response)
        this.router.navigate(['/customer'])
      })
  }
}