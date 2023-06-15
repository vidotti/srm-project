import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Loan } from "../models/loan.type";

@Injectable({ providedIn: 'root' })
export class LoanApplicationService {

  loanApplicationData!: Loan;

  mockSimulateLoan(): Observable<Loan> {
    const response = JSON.parse(`{
    "parcelValues": "R$ 1.500",
    "parcelNumber": 12,
    "total": "R$ 18.000"
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
