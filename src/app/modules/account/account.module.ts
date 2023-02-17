import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountHomeComponent } from './account-home/account-home.component';
import { GetAccountComponent } from './get-account/get-account.component';
import { AccountRoutingModule } from './account-routing.module';
import { FormsModule } from '@angular/forms';
import { GetSingleAccountComponent } from './get-single-account/get-single-account.component';
import { SharedModule } from "../../shared/shared.module";



@NgModule({
    declarations: [
        AccountHomeComponent,
        GetAccountComponent,
        GetSingleAccountComponent,
    ],
    imports: [
        CommonModule,
        AccountRoutingModule,
        FormsModule,
        SharedModule
    ]
})
export class AccountModule { }
