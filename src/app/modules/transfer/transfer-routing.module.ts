import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransferHomeComponent } from './transfer-home/transfer-home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'transfer-home', component: TransferHomeComponent },
      { path: '**', redirectTo: 'transfer-home' }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferRoutingModule { }
