import { Routes, RouterModule } from '@angular/router';
import { LoanApplicationComponent } from './pages/loan-application/loan-application.component';


const routes: Routes = [
    {
    path: '', component: LoanApplicationComponent,
    // canActivate: [AuthGuard]
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
