import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';
import { AuthGuardService } from '../../services/auth-guard.service';
import { NewCompanyComponent } from './components/new-company/new-company.component';
import { RemoveCompanyComponent } from './components/remove-company/remove-company.component';
import { UpdateCompanyComponent } from './components/update-company/update-company.component';
import { GetCompanyComponent } from './components/get-company/get-company.component';
import { GetAllCompaniesComponent } from './components/get-all-companies/get-all-companies.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { RemoveCustomerComponent } from './components/remove-customer/remove-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { GetCustomerComponent } from './components/get-customer/get-customer.component';
import { GetAllCustomersComponent } from './components/get-all-customers/get-all-customers.component';
import { GetAllCouponsComponent } from './components/get-all-coupons/get-all-coupons.component';

const routes: Routes = [
   {
    path: '',
    component: MenuComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuardService],
        children: [
          { path: '', component: GetAllCompaniesComponent },
          { path: 'create_new_company', component: NewCompanyComponent },
          { path: 'remove_company', component: RemoveCompanyComponent },
          { path: 'update_company', component: UpdateCompanyComponent },
          { path: 'get_company_by_id', component: GetCompanyComponent },
          { path: 'get_all_comapnies', component: GetAllCompaniesComponent },
          { path: 'create_new_customer', component: NewCustomerComponent },
          { path: 'remove_customer', component: RemoveCustomerComponent },
          { path: 'update_customer', component: UpdateCustomerComponent },
          { path: 'get_customer_by_id', component: GetCustomerComponent },
          { path: 'get_all_customers', component: GetAllCustomersComponent },
          { path: 'get_all_coupons', component: GetAllCouponsComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
