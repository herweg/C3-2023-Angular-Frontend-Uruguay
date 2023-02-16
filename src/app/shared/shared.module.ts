import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginModule } from '../modules/login/login-module.module';

@NgModule({
    declarations: [
        ToolbarComponent,
        FooterComponent,
        NotfoundComponent
    ],
    exports: [
        ToolbarComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        LoginModule
    ]
})
export class SharedModule { }
