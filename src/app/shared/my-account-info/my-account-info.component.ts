import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerModel } from 'src/app/interfaces/Customer.interface';
import { UpdateCustomer } from 'src/app/interfaces/updatecustomer.interface';
import { CustomerService } from 'src/app/modules/customer/customer.service';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'my-account-info',
  templateUrl: './my-account-info.component.html',
  styleUrls: ['./my-account-info.component.scss']
})
export class MyAccountInfoComponent implements OnInit {

  myCustomer!: CustomerModel
  customerForm!: FormGroup

  constructor(private service: CustomerService,
    private generalService: ServicesService,
    private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      id: [null, Validators.required],
      documentType: [null, Validators.required],
      document: [null, Validators.required],
      fullName: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  ngOnInit(): void {
    this.generalService.getUserByEmail()
      .subscribe(customer => {
        console.log("CUSTOMER", customer);
        console.log("CUSTOMER", this.myCustomer);
        this.myCustomer = customer
        this.customerForm.patchValue({
          id: customer.id,
          documentType: customer.documentType.name,
          document: customer.document,
          fullName: customer.fullName,
          password: customer.password,
          email: customer.email,
          phone: customer.phone
        })
        console.log("CUSTOMER2", customer);
        console.log("CUSTOMER2", this.myCustomer);
      })
    console.log(this.myCustomer)
  }

  get result() {
    return this.service.customerResult
  }

  updateCustomer() {
    console.log(this.customerForm);

    if (this.customerForm.invalid) {
      return
    }
    const id = this.customerForm.controls['id'].value
    const customer: UpdateCustomer = {
      //id: this.customerForm.controls['id'].value,
      documentTypeId: this.customerForm.controls['documentType'].value,
      document: this.customerForm.controls['document'].value,
      fullName: this.customerForm.controls['fullName'].value,
      email: this.customerForm.controls['email'].value,
      phone: this.customerForm.controls['phone'].value,
      password: this.customerForm.controls['password'].value
    }
    this.generalService.updateCustomer(id, customer)
      .subscribe(updated => {
        console.log(updated);
      })
  }
}
