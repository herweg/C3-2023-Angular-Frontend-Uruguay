import { ChangeDetectorRef, Component } from '@angular/core';
import { TransferHistoryModel } from 'src/app/interfaces/transferhistory.interface';
import { TransferService } from '../transfer.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TrasnferHistoryDTO } from '../../../interfaces/transferhistorydto.interface';

@Component({
  selector: 'get-transfer',
  templateUrl: './get-transfer.component.html',
  styleUrls: ['./get-transfer.component.scss']
})
export class GetTransferComponent {

  transferHistory: TransferHistoryModel[] = []
  transferHistoryForm!: FormGroup

  constructor(
    private transferService: TransferService,
    private fb: FormBuilder,
    private cdRef: ChangeDetectorRef) {

    this.transferHistoryForm = this.fb.group({
      accountId: ['', Validators.required],
      offset: [0, Validators.required],
      limit: [10, Validators.required]
    })
  }

  ngOnInit() {

  }

  getTransfer() {
    if (!this.transferHistoryForm.valid) {
      return console.error("transferHistoryForm is not valid");
    }
    const trasnferData: TrasnferHistoryDTO = {
      accountId: this.transferHistoryForm.controls['accountId'].value,
      offset: +this.transferHistoryForm.controls['offset'].value,
      limit: +this.transferHistoryForm.controls['limit'].value
    }

    this.transferService.getTransferHistory(trasnferData.accountId, trasnferData.offset, trasnferData.limit)
      .subscribe(transfers => {
        this.transferHistory = transfers
        this.cdRef.detectChanges()

        console.log("transferhistory", this.transferHistory)
      })
  }
}