import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '../../services/auth-guard.service';
import { MenuComponent } from '../customer/components/menu/menu.component';
import { PurchaseCouponComponent } from '../customer/components/purchase-coupon/purchase-coupon.component';
import { PurchesedCouponListComponent } from '../customer/components/purchesed-coupon-list/purchesed-coupon-list.component';
import { PurchasedCouponsListByTypeComponent } from '../customer/components/purchased-coupons-list-by-type/purchased-coupons-list-by-type.component';
import { PurchasedCouponsByPriceComponent } from '../customer/components/purchased-coupons-by-price/purchased-coupons-by-price.component';

const routes: Routes = [{
  path: '',
  component: MenuComponent,
  canActivate: [AuthGuardService],
  children: [
    {
      path: '',
      canActivateChild: [AuthGuardService],
      children: [
        { path: '', component: PurchaseCouponComponent },
        { path: 'purchase_coupon', component: PurchaseCouponComponent },
        { path: 'all_purchesed_coupons', component: PurchesedCouponListComponent },
        { path: 'all_purchased_coupons_by_type', component: PurchasedCouponsListByTypeComponent },
        { path: 'all_purchased_coupons_by_price', component: PurchasedCouponsByPriceComponent }
      ]
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }