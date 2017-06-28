import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CouponByIdComponent } from './components/coupon-by-id/coupon-by-id.component';
import { CouponListComponent } from './components/coupon-list/coupon-list.component';
import { CreateNewCouponComponent } from './components/create-new-coupon/create-new-coupon.component';
import { MenuComponent } from './components/menu/menu.component';
import { AuthGuardService } from '../../services/auth-guard.service';
// import { LoginComponent } from '../../components/login/login.component';

const routes: Routes = [
   {
    path: '',
    component: MenuComponent,//CompanyComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuardService],
        children: [
          { path: '', component: CouponByIdComponent },// CouponByIdComponent },//CompanyComponent }, MenuComponent
          { path: 'get_coupon_by_id', component: CouponByIdComponent },
          { path: 'get_all_coupons', component: CouponListComponent },
          { path: 'create_new_coupon', component: CreateNewCouponComponent }
          // { path: 'profile', component: LoginComponent }
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
