import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepositHistoryDTO } from 'src/app/interfaces/deoisithistorydto.interface';
import { DepositHistoryModel } from 'src/app/interfaces/deposithistorymodel.interface';
import { DepositService } from '../deposit.service';

@Component({
  selector: 'get-deposit',
  templateUrl: './get-deposit.component.html',
  styleUrls: ['./get-deposit.component.scss']
})
export class GetDepositComponent {

  depositHistory: DepositHistoryModel[] = []
  depositHistoryForm!: FormGroup

  constructor(
    private depositService: DepositService,
    private fb: FormBuilder) {

    this.depositHistoryForm = this.fb.group({
      depositId: ['', Validators.required],
      offset: [0, Validators.required],
      limit: [10, Validators.required]
    })
  }

  getTransfer() {
    console.log(this.depositHistoryForm);
    
    if (!this.depositHistoryForm.valid) {
      return console.error("depositHistoryForm is not valid");
    }
    const depositData: DepositHistoryDTO = {
      depositId: this.depositHistoryForm.controls['depositId'].value,
      offset: +this.depositHistoryForm.controls['offset'].value,
      limit: +this.depositHistoryForm.controls['limit'].value
    }

    this.depositService.getDepositHistory(depositData.depositId, depositData.offset, depositData.limit)
      .subscribe(deposits => {
        this.depositHistory = deposits

        console.log("deposithistory", this.depositHistory)
      })
  }
}
