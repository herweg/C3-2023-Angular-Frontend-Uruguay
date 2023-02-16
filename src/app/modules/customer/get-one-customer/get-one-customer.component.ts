import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'get-one-customer',
  templateUrl: './get-one-customer.component.html',
  styleUrls: ['./get-one-customer.component.scss']
})
export class GetOneCustomerComponent {

  constructor(private service: CustomerService) { }

  get result() {
    return this.service.customerResult
  }
}
