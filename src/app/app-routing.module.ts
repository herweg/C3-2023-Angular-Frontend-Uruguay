import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [

  { path: '', redirectTo: 'app-home', pathMatch: 'full' },
  { path: 'app-home', component: HomeComponent },
  //nuevas rutas
  
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
