import {AfterViewInit, Component, ViewChild } from '@angular/core';
import {ActivatedRoute, Params, Router } from '@angular/router';
import Splide from '@splidejs/splide';
import { NgxSplideComponent } from 'ngx-splide';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrl: './slides.component.css'
})
export class SlidesComponent implements AfterViewInit {
  @ViewChild('splideComponent') splideComponent!: NgxSplideComponent;

  selectedSlide!:string;
  splide!: Splide;
  indexSlideMap: string[] = [  //INDEX OF AN ITEM AND NUMBER OF ITEMS MATTERS! It should be equal to the slide position in the app-slides template.
    "intro",
    "history",
    "use-cases",
    "architecture",
    "data-flow",
    "scaling",
    "integrations",
    "classic-setup",
    "ghsl-data",
    "implementation",
    "thank-you",
  ]

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngAfterViewInit() {
    this.splide = this.splideComponent.getSplideInstance()
    this.route.queryParams.subscribe((params: Params) => {
      this.selectedSlide = params['slide']?params['slide']:"intro"
      this.splide.go(this.indexSlideMap.indexOf(this.selectedSlide))
    })
    this.splideComponent.onMoved.subscribe((args) => {
      const destIndex = args[2];
      this.updateSlideQueryParam(this.indexSlideMap[destIndex])
    })
  }

  updateSlideQueryParam(slideValue: string): void {
    const queryParams = { ...this.route.snapshot.queryParams };
    queryParams['slide'] = slideValue;
    this.router.navigate([], { relativeTo: this.route, queryParams: queryParams, queryParamsHandling: 'merge' });
  }

}
