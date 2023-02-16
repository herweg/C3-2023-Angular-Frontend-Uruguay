import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  constructor(private globalService: ServicesService) { }

  ngDoCheck() {
    this.globalService.switchInUp()
  }
}
