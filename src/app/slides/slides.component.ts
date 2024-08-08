import {AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrl: './slides.component.css'
})
export class SlidesComponent implements AfterViewInit {
  @ViewChild('splideComponent') splideComponent!: ElementRef;

  splide!: Splide;

  ngAfterViewInit() {

  }

}
