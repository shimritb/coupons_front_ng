import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './components/home/home.component';
import { HomeComponent } from './components/home/home.component'
import { AuthGuardService } from '../../services/auth-guard.service';
import { PageNotFoundComponent }    from '../../components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'customer',
    loadChildren: 'app/modules/customer/customer.module#CustomerModule',
    canLoad: [AuthGuardService]
  },
  {
    path: 'company',
    loadChildren: 'app/modules/company/company.module#CompanyModule',
    canLoad: [AuthGuardService]
  },
  {
    path: 'admin',
    loadChildren: 'app/modules/admin/admin.module#AdminModule',
    canLoad: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
