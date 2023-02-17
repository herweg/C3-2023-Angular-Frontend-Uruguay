import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ServicesService } from '../../../services/services.service';
import { CustomerModel } from 'src/app/interfaces/Customer.interface';
import { AccountModel } from '../../../interfaces/account.interface';
import { TransferModel } from '../../../interfaces/transfer.interface';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'create-transfer',
  templateUrl: './create-transfer.component.html',
  styleUrls: ['./create-transfer.component.scss']
})
export class CreateTransferComponent {

  transferForm: FormGroup
  myCustomer!: CustomerModel
  myAccounts!: AccountModel[]
  newTransfer!: TransferModel

  constructor(
    private fb: FormBuilder,
    private generalService: ServicesService,
    private transferService: TransferService) {
    this.transferForm = this.fb.group({
      outcome: ['', Validators.required],
      income: ['', Validators.required],
      amount: ['', Validators.required],
      reason: ['', Validators.required]
    })
  }

  //Al cargar el modulo se ejecuta, popula myCustomer y luego
  //ejecuta getMyAccounts() (definida luego)
  ngOnInit(): void {
    this.generalService.getUserByEmail()
      .subscribe(customer => {
        console.log(customer);
        this.myCustomer = customer
        this.getMyAccounts()
      })
  }

  getMyAccounts() {
    this.generalService.getAccByCustomer(this.myCustomer.id)
      .subscribe((acc: AccountModel[]) => {
        console.log(acc);
        this.myAccounts = acc
        this.transferForm.get('outcome')?.setValue(this.myAccounts[0].id)
        console.log(this.transferForm);
      })
  }

  //Armar un TransferModel para enviar
  postTransfer() {
    console.log(this.transferForm.value);

    if (this.transferForm.valid) {
      const form: TransferModel = {
        income: this.transferForm.controls['income'].value,
        amount: Number(this.transferForm.controls['amount'].value),
        reason: this.transferForm.controls['reason'].value,
        outcome: this.transferForm.controls['outcome'].value
      }
      this.transferService.createTransfer(form).subscribe(
        data => console.log(data)
      )
    }
  }
}
