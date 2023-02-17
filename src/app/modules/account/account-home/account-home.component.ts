import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.scss']
})
export class AccountHomeComponent {

  inputValue!: string

  constructor(private service: AccountService) { }

  searchAllAccounts(): void {
    this.service.getAllAccounts()
  }

  searchAccountById(id: string): void {
    this.service.getAccountById(id)
  }

  getInput(): void {
    if (this.inputValue.length === 0) alert("Debes ingresar un valor")
    this.service.getAccountById(this.inputValue)
    this.inputValue = ''
  }

  changeAccType(){
    
  }
}
