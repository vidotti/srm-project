import { Component } from '@angular/core';
import { Loan } from '../models/loan.type';
import { LoanApplicationService } from '../service/loan-application.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.scss']
})
export class SuccessPageComponent {

  public loanApplicationServiceData!: Loan;

  constructor(
    private router: Router,
    private loanAppService: LoanApplicationService
    ){
    this.loanApplicationServiceData = this.loanAppService.loanApplicationData;
  }

  goToLoanApplication(){
    this.router.navigate(['/loan-application']);
  }

}
