import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountModel } from 'src/app/interfaces/account.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url: string = 'http://localhost:3000/account'

  allAccounts: AccountModel[] = []
  accountById: AccountModel[] = []

  constructor(private http: HttpClient) { }

  getAllAccounts(): void {
    this.http
      .get<AccountModel[]>(`${this.url}/getall`)
      .subscribe(resp => this.allAccounts = resp)
  }

  getAccountById(id: string): void {
    this.http
      .get<AccountModel>(`${this.url}/id/${id}`)
      .subscribe(resp => this.accountById = [resp])
  }

  
}
