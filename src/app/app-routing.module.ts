import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { PageNotFoundComponent }    from './components/page-not-found/page-not-found.component';
import { AuthGuardService }         from './services/auth-guard.service';
// import { LoginComponent }         from './components/login/login.component';
//import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const appRoutes: Routes = [
 {
    path: 'home',
    loadChildren: 'app/modules/home/home.module#HomeModule',
    canLoad: [AuthGuardService]
  },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule { }