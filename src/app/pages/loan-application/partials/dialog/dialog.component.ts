import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { LoanApplicationService } from '../../service/loan-application.service';
import { Loan } from '../../models/loan.type';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './dialog.component.html',
  standalone: true,
  imports: [MatDialogModule, NgIf],
})
export class DialogDataExampleDialog {

  public loanApplicationServiceData!: Loan;

  constructor(
    private router: Router,
    private loanAppService: LoanApplicationService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.loanApplicationServiceData = this.loanAppService.loanApplicationData;
  }

  confirm(){
    this.router.navigate(['/loan-application/success-page']);
  }
}
