import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountHomeComponent } from './account-home/account-home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'account-home', component: AccountHomeComponent},
      { path: '**', redirectTo: 'account-home' }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
