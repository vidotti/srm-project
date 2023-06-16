import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DialogDataExampleDialog } from './partials/dialog/dialog.component';
import { Observable } from 'rxjs';
import { Loan } from './models/loan.type';
import { LoanApplicationService } from './service/loan-application.service';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.scss'],
})
export class LoanApplicationComponent implements OnInit {

  enableConfirmButton = false;

  hasLoading = false;

  simulatedLoan!: Loan;

  loanForm!: FormGroup;

  animal!: string;
  name!: string;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private mockService: LoanApplicationService
    ) { }

  ngOnInit(): void {
    this.loanForm = this.fb.group({
      name: ['', [Validators.required]],
      value: ['', [Validators.required]],
      parcelNumber: ['', [Validators.required]]
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogDataExampleDialog,
      {
        data: { clientName: this.loanForm.get('name')?.value },
      });

    // dialogRef.afterClosed().subscribe(result => {
    // });
  }


  setServiceLoanData(response: Loan){
    this.mockService.loanApplicationData = {
      'parcelValues': response.parcelValues,
      'parcelNumber': response.parcelNumber,
      'total': response.total
    }
  }


  mockSimulateLoan(): void {

    const { name, value, parcelNumber } = this.loanForm.getRawValue();

    const params = {
      name,
      value,
      parcelNumber
    }

    this.hasLoading = true;
    this.mockService.mockSimulateLoan(params).subscribe({
      next: (simulatedLoan) => {
        // console.log(simulatedLoan);
        this.hasLoading = false;
        this.simulatedLoan = simulatedLoan;
        this.setServiceLoanData(this.simulatedLoan);
      }, error: (err) => {console.log(err)}
    });
  }

}
