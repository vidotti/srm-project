import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoanApplicationModule } from './pages/loan-application/loan-application.module';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
