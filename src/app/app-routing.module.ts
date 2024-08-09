import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import {NavigationBlockedComponent} from "./navigation/navigation-blocked/navigation-blocked.component";
import {PageNotFoundComponent} from "./navigation/page-not-found/page-not-found.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {AppComponent} from "./app.component";
import {SlidesComponent} from "./slides/slides.component";

// ROUTES
const routes: Routes = [
  {path: '', component: AppComponent, children: [
    { path: '', redirectTo: '/slides', pathMatch: 'full'},
    { path: 'slides', component: SlidesComponent, canActivate: [AuthGuardService]},
  ]},
  {path: 'blocked', component: NavigationBlockedComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AppRoutingModule { }
