import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-data-flow',
  templateUrl: './data-flow.component.html',
  styleUrl: './data-flow.component.scss'
})
export class DataFlowComponent {

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  onWheel($event: WheelEvent) {
    const target = this.scrollContainer.nativeElement;
    const scrollLeft = target.scrollLeft;
    target.scrollTo({left: scrollLeft + $event.deltaX, behavior: 'smooth' });
  }

}
