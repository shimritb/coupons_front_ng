import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CouponByIdComponent } from './components/coupon-by-id/coupon-by-id.component';
import { CouponListComponent } from './components/coupon-list/coupon-list.component';
import { CreateNewCouponComponent } from './components/create-new-coupon/create-new-coupon.component';
import { CouponByPriceComponent } from './components/coupon-by-price/coupon-by-price.component';
import { CouponByDateComponent } from './components/coupon-by-date/coupon-by-date.component';
import { MenuComponent } from './components/menu/menu.component';
import { AuthGuardService } from '../../services/auth-guard.service';
import { CouponByTypeComponent } from './components/coupon-by-type/coupon-by-type.component';

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
          { path: '', component: CouponByIdComponent },
          { path: 'get_coupon_by_id', component: CouponByIdComponent },
          { path: 'get_all_coupons', component: CouponListComponent },
          { path: 'create_new_coupon', component: CreateNewCouponComponent },
          { path: 'get_coupon_by_price', component: CouponByPriceComponent },
          { path: 'get_coupon_by_type', component: CouponByTypeComponent },
          { path: 'get_coupon_by_date', component: CouponByDateComponent } 
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
