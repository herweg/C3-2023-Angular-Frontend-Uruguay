import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { ServicesService } from '../../../services/services.service';
import { CustomerModel } from 'src/app/interfaces/Customer.interface';

@Component({
  selector: 'customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent {

  constructor(private service: CustomerService,
    private generalService: ServicesService) { }


  inputId = new FormControl('')
  myCustomer!: CustomerModel

  oneOrMany: boolean = true

  searchCustomers() {
    this.oneOrMany = false
    this.service.getCustomers()
  }

  searchCustomerById() {
    this.oneOrMany = true
    const customerId = this.inputId.value ?? ''
    this.service.getCustomerById(customerId)
  }

  // get result() {
  //   return this.service.myCustomer
  // }
}