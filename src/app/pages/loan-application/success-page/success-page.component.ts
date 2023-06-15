import { Component } from '@angular/core';
import { Loan } from '../models/loan.type';
import { LoanApplicationService } from '../service/loan-application.service';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.scss']
})
export class SuccessPageComponent {

  public loanApplicationServiceData!: Loan;

  constructor(private loanAppService: LoanApplicationService){
    this.loanApplicationServiceData = this.loanAppService.loanApplicationData;
  }

}
