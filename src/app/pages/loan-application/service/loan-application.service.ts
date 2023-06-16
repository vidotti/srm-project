import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Loan } from "../models/loan.type";


export interface SimulatedLoanParams {
  name: string,
  value: number,
  parcelNumber: number
}

@Injectable({ providedIn: 'root' })
export class LoanApplicationService {

  loanApplicationData!: Loan;

  mockSimulateLoan(params: SimulatedLoanParams): Observable<Loan> {
    const parcelValueWithInterestRate = params.value + ((params.value / 100)*5)
    const response = JSON.parse(`{
    "parcelValues": ${parcelValueWithInterestRate.toFixed(2)},
    "parcelNumber": "${params.parcelNumber}",
    "total": ${((params.parcelNumber * parcelValueWithInterestRate).toFixed(2))}
  }`);

    let obs = new Observable<Loan>((subscriber) => {
        setTimeout(()=>{
            subscriber.next(response);
            subscriber.complete();
        }, 3000);
    });
    return obs;
  }

}
