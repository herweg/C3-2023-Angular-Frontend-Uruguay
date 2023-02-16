import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sing-out',
  templateUrl: './sing-out.component.html',
  styleUrls: ['./sing-out.component.scss']
})
export class SingOutComponent {
  constructor(
    private service: LoginService,
    private router: Router) { }

  logOut() {
    this.service.fireLogOut()
      .then(() => {
        this.service.setUserLogged(false)
        localStorage.removeItem("token")
        this.router.navigate(['/login'])
      })
      .catch(e => console.log(e))
  }

}
