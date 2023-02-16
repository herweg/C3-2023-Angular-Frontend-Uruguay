import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { ServicesService } from '../../../services/services.service';
import { CustomerModel } from '../../../interfaces/Customer.interface';

@Component({
  selector: 'customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent implements OnInit {

  constructor(private service: CustomerService,
    private generalService: ServicesService) { }

  ngOnInit(): void {

    this.generalService.getUserByEmail()
      .subscribe(customer => {
        console.log(customer);

        this.myCustomer = customer
      })

    console.log(this.myCustomer)
  }

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