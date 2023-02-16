import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { CustomerModel } from '../interfaces/Customer.interface';
import { TokenDecoded } from '../interfaces/tokendecoded.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private url: string = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }
  //Swap entre signIn y signUp

  public valorForm: number = 0;
  public switchSignIn: boolean = true;
  public switchSignUp: boolean = false;

  switchInUp() {

    switch (this.valorForm) {

      case 1:
        this.switchSignIn = true;
        this.switchSignUp = false;
        break;

      case 2:
        this.switchSignUp = true;
        this.switchSignIn = false;
        break;
    }
  }

  jwthelper = new JwtHelperService()

  decodedToken() {
    const token = localStorage.getItem("token")
    if (token) {
      console.log(token);

      return this.jwthelper.decodeToken(token)
    }
  }

  getUserByEmail() {
    const user: TokenDecoded = this.decodedToken()
    const email: string = user.email

    console.log(user);
    console.log(email);

    return this.http
      .get<CustomerModel>(`${this.url}customer/getbyemail/${email}`)
  }
}
