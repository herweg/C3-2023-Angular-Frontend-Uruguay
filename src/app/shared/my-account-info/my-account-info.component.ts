import { Component, OnInit } from '@angular/core';
import { CustomerModel } from 'src/app/interfaces/Customer.interface';
import { CustomerService } from 'src/app/modules/customer/customer.service';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'my-account-info',
  templateUrl: './my-account-info.component.html',
  styleUrls: ['./my-account-info.component.scss']
})
export class MyAccountInfoComponent implements OnInit {
  constructor(private service: CustomerService,
    private generalService: ServicesService) { }

  myCustomer!: CustomerModel

  ngOnInit(): void {
    this.generalService.getUserByEmail()
      .subscribe(customer => {
        console.log(customer);
        this.myCustomer = customer
      })
    console.log(this.myCustomer)
  }
  
  get result() {
    return this.service.customerResult
  }
}
