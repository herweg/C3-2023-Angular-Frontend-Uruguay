import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { CustomerModel } from 'src/app/interfaces/Customer.interface';
import { ServicesService } from '../../services/services.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url: string = 'http://localhost:3000/customer'

  //Almacenar la consulta (pedida mas abajo)
  allCustomers: CustomerModel[] = []
  customerResult!: CustomerModel
  myCustomer!: CustomerModel

  constructor(private http: HttpClient) { }

  //Consulta a la api
  getCustomers(): void {
    //consulta
    this.http
      .get<CustomerModel[]>(`${this.url}/getall`)
      .subscribe(resp => this.allCustomers = resp)
  }

  getCustomerById(id: string): void {
    //validaciones
    id = id.trim().toLowerCase()
    //consulta
    this.http
      .get<CustomerModel>(`${this.url}/info/${id}`)
      .subscribe(resp => this.customerResult = resp)
  }
}
