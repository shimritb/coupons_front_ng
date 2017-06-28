import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { CompanyRoutingModule } from './company-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { CouponByIdComponent } from './components/coupon-by-id/coupon-by-id.component';
import { CouponListComponent } from './components/coupon-list/coupon-list.component';
// import { LoginComponent } from '../../components/login/login.component';
// import { LoginRoutingModule } from '../../components/login/login-routing.module';

import { CompanyService } from './services/company.service';
import { CreateNewCouponComponent } from './components/create-new-coupon/create-new-coupon.component'

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // LoginRoutingModule
  ],
  declarations: [
    MenuComponent, 
    CouponByIdComponent, 
    CouponListComponent, CreateNewCouponComponent],
    // LoginComponent],
  providers: [CompanyService]
})
export class CompanyModule { }
