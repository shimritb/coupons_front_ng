import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { CustomerRoutingModule } from './customer-routing.module';

import { MenuComponent } from './components/menu/menu.component';
import { PurchaseCouponComponent } from './components/purchase-coupon/purchase-coupon.component';

import { CustomerService } from './services/customer.service';
import { PurchesedCouponListComponent } from './components/purchesed-coupon-list/purchesed-coupon-list.component';
import { PurchasedCouponsListByTypeComponent } from './components/purchased-coupons-list-by-type/purchased-coupons-list-by-type.component';
import { PurchasedCouponsByPriceComponent } from './components/purchased-coupons-by-price/purchased-coupons-by-price.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MenuComponent, PurchaseCouponComponent, PurchesedCouponListComponent, PurchasedCouponsListByTypeComponent, PurchasedCouponsByPriceComponent],
  providers: [CustomerService]
})
export class CustomerModule { }
