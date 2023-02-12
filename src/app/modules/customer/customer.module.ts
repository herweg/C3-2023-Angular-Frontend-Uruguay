import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetCustomerComponent } from './get-customer/get-customer.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerRoutingModule } from './customer-routing.module';



@NgModule({
  declarations: [
    GetCustomerComponent,
    CustomerHomeComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }