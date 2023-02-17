import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositHomeComponent } from './deposit-home/deposit-home.component';
import { GetDepositComponent } from './get-deposit/get-deposit.component';
import { PostDepositComponent } from './post-deposit/post-deposit.component';
import { DepositRoutingModule } from './deposit-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from 'src/app/material/material.module';
import { MatListModule } from '@angular/material/list';



@NgModule({
    declarations: [
        DepositHomeComponent,
        GetDepositComponent,
        PostDepositComponent
    ],
    imports: [
        CommonModule,
        DepositRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        MaterialModule,
        MatListModule
    ]
})
export class DepositModule { }
