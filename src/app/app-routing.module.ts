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
  // { path: 'login', component: LoginComponent },             // those to must be siabled and default page should be home guarded by authservice
  // { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    //   ,
    //   { preloadingStrategy: SelectivePreloadingStrategy }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    // CanDeactivateGuard,
    // SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }