import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanApplicationComponent } from './loan-application.component';
import { SuccessPageComponent } from './success-page/success-page.component';

const moviesRoutes: Routes = [

  {
    path: 'loan-application',
    children: [
      { path: '', component: LoanApplicationComponent },
      { path: 'success-page', component: SuccessPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(moviesRoutes)],
  exports: [RouterModule]
})
export class LoanApplicationRoutingModule { }
