import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { LoanApplicationComponent } from './pages/loan-application/loan-application.component';

@NgModule({
  declarations: [
    AppComponent,
    LoanApplicationComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
