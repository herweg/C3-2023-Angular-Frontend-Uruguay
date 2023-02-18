import { NgModule } from '@angular/core';
import { DepositHomeComponent } from './deposit-home/deposit-home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'deposit-home', component: DepositHomeComponent},
      { path: '**', redirectTo: 'deposit-home' }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepositRoutingModule { }
