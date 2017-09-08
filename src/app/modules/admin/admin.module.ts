import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminService } from './services/admin.service';

import { AdminRoutingModule } from './admin-routing.module';
import { MenuComponent } from './components/menu/menu.component';
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

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MenuComponent,
    NewCompanyComponent, 
    RemoveCompanyComponent, 
    UpdateCompanyComponent, 
    GetCompanyComponent, 
    GetAllCompaniesComponent, 
    NewCustomerComponent,
    RemoveCustomerComponent, 
    UpdateCustomerComponent, 
    GetCustomerComponent, 
    GetAllCustomersComponent, 
    GetAllCouponsComponent],
  providers: [AdminService]
})
export class AdminModule { }
