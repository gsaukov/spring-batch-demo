import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { RouterOutlet } from '@angular/router'
import { NgxSplideModule } from 'ngx-splide'
import {SlidesComponent} from "./slides/slides.component";

@NgModule({
  declarations: [
    AppComponent,
    SlidesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterOutlet,
    NgxSplideModule
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
