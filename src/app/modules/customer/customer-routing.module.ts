import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/components/home/home.component';
import { AuthGuardService } from '../../services/auth-guard.service';
import { CompanyComponent } from '../company/components/company/company.component';
import { CustomerComponent } from '../customer/components/customer/customer.component';

const routes: Routes = [{
  path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuardService],
        children: [
          // { path: 'company', component: CompanyComponent },
          { path: 'customer', component: CustomerComponent },
          { path: '', component: HomeComponent }
          // { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
