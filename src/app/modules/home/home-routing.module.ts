import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './components/home/home.component';
import { HomeComponent } from './components/home/home.component'
import { AuthGuardService } from '../../services/auth-guard.service';
import { PageNotFoundComponent }    from '../../components/page-not-found/page-not-found.component';
// import { CompanyComponent } from '../company/components/company/company.component';
// import { CustomerComponent } from '../customer/components/customer/customer.component';

const routes: Routes = [
  //  { 
  //    path: '', component: HomeComponent 
  //  },
   {
    path: 'customer',
    loadChildren: 'app/modules/customer/customer.module#CustomerModule',
    canLoad: [AuthGuardService]
  },
  {
    path: 'company',
    loadChildren: 'app/modules/company/company.module#CompanyModule',
    canLoad: [AuthGuardService]
  }
  // { path: '**', component: PageNotFoundComponent }
  // path: '',  ---> this configuration can feet well in final routings but not here
  //   component: HomeComponent,
  //   canActivate: [AuthGuardService],
  //   children: [
  //     {
  //       path: '',
  //       canActivateChild: [AuthGuardService],
  //       children: [
  //         { path: 'company', component: CompanyComponent },
  //         { path: 'customer', component: CustomerComponent },
  //         { path: '', component: HomeComponent }
  //         // { path: '', component: AdminDashboardComponent }
  //       ]
  //     }
  //   ]
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
