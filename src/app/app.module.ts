import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { RouterOutlet } from '@angular/router'
import { NgxSplideModule } from 'ngx-splide'
import {SlidesComponent} from "./slides/slides.component";
import {NavigationBlockedComponent} from "./navigation/navigation-blocked/navigation-blocked.component";
import {PageNotFoundComponent} from "./navigation/page-not-found/page-not-found.component";
import {MatImportsModule} from "./mat-imports.module";
import {CounterDirective} from "./navigation/page-not-found/counter.directive";
import {AppRoutingModule} from "./app-routing.module";
import { IntroComponent } from './slides/intro/intro.component';
import { HistoryComponent } from './slides/history/history.component';
import { UseCasesComponent } from './slides/use-cases/use-cases.component';
import { ArchitectureComponent } from './slides/architecture/architecture.component';
import { DataFlowComponent } from './slides/data-flow/data-flow.component';
import { ScalingComponent } from './slides/scaling/scaling.component';
import { ImplementationComponent } from './slides/implementation/implementation.component';
import { IntegrationsComponent } from './slides/integrations/integrations.component';
import { ClassicSetupComponent } from './slides/classic-setup/classic-setup.component';
import { BenefitsComponent } from './slides/benefits/benefits.component';
import {DiagramComponent} from "./slides/diagram.component";

@NgModule({
  declarations: [
    AppComponent,
    SlidesComponent,
    NavigationBlockedComponent,
    PageNotFoundComponent,
    CounterDirective,
    IntroComponent,
    HistoryComponent,
    UseCasesComponent,
    ArchitectureComponent,
    DataFlowComponent,
    ScalingComponent,
    ImplementationComponent,
    IntegrationsComponent,
    ClassicSetupComponent,
    BenefitsComponent,
    DiagramComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterOutlet,
    NgxSplideModule,
    MatImportsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule {
  constructor() {
  }
}
