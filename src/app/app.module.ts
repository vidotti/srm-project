import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoanApplicationModule } from './pages/loan-application/loan-application.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    LoanApplicationModule,
    BrowserModule,
    appRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-br'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
