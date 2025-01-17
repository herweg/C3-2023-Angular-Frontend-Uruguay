import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignInModel } from '../../interfaces/signin.interface';
import { SignUpModel } from 'src/app/interfaces/signup.interface';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string = 'http://localhost:3000/security'

  constructor(private http: HttpClient,
    private auth: Auth,
    private router: Router) { }

  userLogged: BehaviorSubject<boolean> = new BehaviorSubject(false)

  setUserLogged(logged: boolean) {
    this.userLogged.next(logged)
  }

  fireSignUp(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
  }

  fireSignIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  googleLogin() {
    return signInWithPopup(this.auth, new GoogleAuthProvider())
  }

  fireLogOut() {
    return signOut(this.auth)
  }

  signIn(signIn: SignInModel) {
    this.http
      .post(`${this.url}/signin`, signIn, { responseType: 'text' })
      .subscribe(token => {
        if (token) {
          localStorage.setItem("token", token)
          this.setUserLogged(true)
          this.router.navigate(["/customer"])
        }
      })
  }

  signUp(signUp: SignUpModel) {
    this.http
      .post(`${this.url}/signup`, signUp, { responseType: 'text' })
      .subscribe(token => {
        localStorage.setItem("token", token)
        this.setUserLogged(true)
        //Redirect
        this.router.navigate(["/customer"])
      })
  }

  logOut(token: string) {
    this.setUserLogged(false)
    this.http
      .post(`${this.url}/signout/${token}`, { responseType: 'text' })
      .subscribe(token => {
        if (token) {
          localStorage.removeItem("token")
          this.setUserLogged(false)
        }
      })
  }

  checkByEmail(email: string) {
    return this.http.post(`${this.url}/fire`, { email: email }, { responseType: 'text' })
      .subscribe(response => {
        if (response) {
          localStorage.setItem('token', response)
          this.setUserLogged(true)
          this.router.navigate(['/customer'])
        }
      })
  }
}
