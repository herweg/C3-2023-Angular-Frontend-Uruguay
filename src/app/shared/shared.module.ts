import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginModule } from '../modules/login/login-module.module';
import { MyAccountInfoComponent } from './my-account-info/my-account-info.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ToolbarComponent,
        FooterComponent,
        NotfoundComponent,
        MyAccountInfoComponent
    ],
    exports: [
        ToolbarComponent,
        FooterComponent,
        MyAccountInfoComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        LoginModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
