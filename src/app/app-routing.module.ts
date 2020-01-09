import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { WikiComponent } from './components/wiki/wiki.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'wiki', component: WikiComponent },
  { path: 'wiki/:type', component: WikiComponent },
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

