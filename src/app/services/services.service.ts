import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  //Swap entre signIn y signUp

  public valorForm: number = 0;
  public switchSignIn: boolean = true;
  public switchSignUp: boolean = false;

  eligeFormmulario() {

    switch (this.valorForm) {

      case 1:
        this.switchSignIn = true;
        this.switchSignUp = false;
        console.log("LogIn :" + this.switchSignIn);
        break;

      case 2:
        this.switchSignUp = true;
        this.switchSignIn = false;
        console.log("LogUp :" + this.switchSignUp);
        break;
    }
  }

  //Variable en localstorage para el login

  // ngOnInit(): void {
  //   this.defaultLogin()
  // }

  // ngDoCheck() {
  //   this.switch()
  // }

  // mostrar = localStorage.getItem('logged') === 'true'

  // switch() {
  //   this.mostrar = !this.mostrar
  // }

  // defaultLogin() {
  //   if (!(localStorage.getItem('logged')))
  //     localStorage.setItem('logged', 'false')
  // }

  // activeLogin() {
  //   localStorage.getItem('logged')
  //   localStorage.setItem('logged', 'true')
  // }

  // logOut() {
  //   localStorage.clear()
  // }
}
