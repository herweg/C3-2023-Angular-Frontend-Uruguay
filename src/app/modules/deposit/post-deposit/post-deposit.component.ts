import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DepositService } from '../deposit.service';
import { DepositModel } from '../../../interfaces/deposit.interface';

@Component({
  selector: 'post-deposit',
  templateUrl: './post-deposit.component.html',
  styleUrls: ['./post-deposit.component.scss']
})
export class PostDepositComponent {

  constructor(
    private service: DepositService,
    private fb: FormBuilder) { }

  depositForm = this.fb.group({
    id: ['', Validators.required],
    amount: ['', Validators.required],
  })

  postDeposit() {
    if (this.depositForm.controls.id.value && this.depositForm.controls.amount.value) {
      let form: DepositModel = {
        id: this.depositForm.controls.id.value,
        amount: + this.depositForm.controls.amount.value
      }
      this.service.createDeposit(form).subscribe(data => { console.log(data) })
    }
  }
}

