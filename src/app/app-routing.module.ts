import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'landing', component: LandingComponent },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
]

/**
 * Ng module
 */
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true, // has mode #
    anchorScrolling: 'enabled', // not working, bug?
    onSameUrlNavigation: 'reload', // not working, bug?
    enableTracing: false,
    scrollPositionRestoration: 'enabled' // not working, bug?
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

