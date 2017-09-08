import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { CompanyRoutingModule } from './company-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { CouponByIdComponent } from './components/coupon-by-id/coupon-by-id.component';
import { CouponListComponent } from './components/coupon-list/coupon-list.component';

import { CompanyService } from './services/company.service';
import { CreateNewCouponComponent } from './components/create-new-coupon/create-new-coupon.component';
import { CouponByPriceComponent } from './components/coupon-by-price/coupon-by-price.component';
import { CouponByTypeComponent } from './components/coupon-by-type/coupon-by-type.component';
import { CouponByDateComponent } from './components/coupon-by-date/coupon-by-date.component'

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MenuComponent, 
    CouponByIdComponent, 
    CouponListComponent,
    CreateNewCouponComponent, 
    CouponByPriceComponent, 
    CouponByTypeComponent, 
    CouponByDateComponent],
  providers: [CompanyService]
})
export class CompanyModule { }
