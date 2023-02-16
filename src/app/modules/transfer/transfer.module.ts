import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTransferComponent } from './create-transfer/create-transfer.component';
import { GetTransferComponent } from './get-transfer/get-transfer.component';
import { TransferHomeComponent } from './transfer-home/transfer-home.component';
import { TransferRoutingModule } from './transfer-routing.module';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateTransferComponent,
    GetTransferComponent,
    TransferHomeComponent
  ],
  imports: [
    CommonModule,
    TransferRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class TransferModule { }
