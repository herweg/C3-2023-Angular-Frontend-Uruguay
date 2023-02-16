import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetCustomerComponent } from './get-customer/get-customer.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { GetOneCustomerComponent } from './get-one-customer/get-one-customer.component';



@NgModule({
  declarations: [
    GetCustomerComponent,
    CustomerHomeComponent,
    GetOneCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
