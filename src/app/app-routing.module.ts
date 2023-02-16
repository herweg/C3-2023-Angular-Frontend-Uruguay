import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

import { LoginComponent } from './modules/login/login.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { CustomerModule } from './modules/customer/customer.module';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  //nuevas rutas
  { path: 'login', component: LoginComponent },
  {
    path: 'login',
    loadChildren: () => import('../app/modules/login/login-module.module')
      .then(m => m.LoginModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('../app/modules/customer/customer.module')
      .then(m => m.CustomerModule),
    //...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'account',
    loadChildren: () => import('../app/modules/account/account.module')
      .then(m => m.AccountModule)
  },
  {
    path: 'transfer',
    loadChildren: () => import('../app/modules/transfer/transfer.module')
      .then(m => m.TransferModule)
  },
  {
    path: 'deposit',
    loadChildren: () => import('../app/modules/deposit/deposit.module')
      .then(m => m.DepositModule)
  },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
