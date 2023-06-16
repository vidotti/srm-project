import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoanApplicationComponent } from './loan-application.component';
import { LoanApplicationRoutingModule } from './loan-application.routing.module';
import { SuccessPageComponent } from './success-page/success-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgxCurrencyModule } from 'ngx-currency';

@NgModule({
  declarations: [
    SuccessPageComponent,
    LoanApplicationComponent
  ],
  imports: [
    NgxCurrencyModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LoanApplicationRoutingModule,
  ],
  exports: [

  ]
})
export class LoanApplicationModule { }
