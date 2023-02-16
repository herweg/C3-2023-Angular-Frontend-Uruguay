import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { GuardsGuard } from 'src/app/guards.guard'
import { CustomerHomeComponent } from './customer-home/customer-home.component'

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'customer-home', component: CustomerHomeComponent },
      { path: '**', redirectTo: 'customer-home' }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
